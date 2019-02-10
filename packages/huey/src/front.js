import { sharedDimensions } from "./shared";

export default function(part) {
  let {
    utils,
    store,
    macro,
    Point,
    Path,
    points,
    paths,
    complete,
    paperless,
    snippets,
    Snippet,
    sa,
    options,
    measurements
  } = part.shorthand();

  // Clear paths from Brian
  for (let p of Object.keys(paths)) delete paths[p];

  // Shorten body to take ribbing into account
  if (options.ribbing) {
    for (let p of ["hem", "cfHem"])
      points[p] = points[p].shift(90, store.get("ribbingHeight"));
  }

  // Shape side seam
  points.waist.x = (measurements.naturalWaist * (1 + options.waistEase)) / 4;
  points.hips.x = (measurements.hipsCircumference * (1 + options.hipsEase)) / 4;
  points.hem.x = points.hips.x;

  // Front pocket
  points.pocketCfTop = points.cfNeck.shiftFractionTowards(
    points.cfHem,
    1 - options.pocketHeight
  );
  points.pocketTopRight = points.pocketCfTop.shift(
    0,
    points.waist.x * options.pocketWidth
  );
  points.pocketTip = new Point(
    points.pocketTopRight.x * 1.2,
    points.waist.y + points.waist.dy(points.hem) * 0.7
  );
  points.pocketHem = new Point(
    points.pocketTopRight.x + points.pocketTopRight.dx(points.pocketTip) / 2,
    points.hem.y
  );
  points.pocketTipCp2 = utils.beamsIntersect(
    points.pocketTopRight,
    points.pocketTopRight.shift(90, 10),
    points.pocketTip,
    points.pocketHem.rotate(-90, points.pocketTip)
  );

  // Store length of the neck seam
  store.set(
    "frontNeckSeamLength",
    new Path()
      .move(points.neck)
      .curve(points.neckCp2Front, points.cfNeckCp1, points.cfNeck)
      .length()
  );

  // Paths
  paths.saBase = new Path()
    .move(points.hem)
    .curve_(points.waist, points.armhole)
    .curve(points.armholeCp2, points.armholeHollowCp1, points.armholeHollow)
    .curve(points.armholeHollowCp2, points.armholePitchCp1, points.armholePitch)
    .curve(points.armholePitchCp2, points.shoulderCp1, points.shoulder)
    .line(points.neck)
    .curve(points.neckCp2, points.cfNeckCp1, points.cfNeck)
    .attr("class", "note stroke-xxl");
  paths.hemBase = new Path()
    .move(points.cfHem)
    .line(points.hem)
    .attr("class", "note stroke-xxl");
  paths.saBase.render = false;
  paths.hemBase.render = false;

  paths.seam = paths.saBase
    .clone()
    .line(points.cfHem)
    .join(paths.hemBase)
    .close()
    .attr("class", "fabric");

  // Complete?
  if (complete) {
    if (options.pocket) {
      paths.pocket = new Path()
        .move(points.pocketHem)
        .line(points.pocketTip)
        .curve_(points.pocketTipCp2, points.pocketTopRight)
        .line(points.pocketCfTop)
        .attr("class", "fabric dashed stroke-sm");
    }

    if (sa) {
      paths.sa = paths.hemBase
        .offset(options.ribbing ? sa : 3 * sa)
        .join(paths.saBase.offset(sa));
      paths.sa
        .move(paths.sa.end())
        .line(points.cfNeck)
        .move(paths.sa.start())
        .line(points.cfHem)
        .attr("class", "fabric sa");
    }
  }

  // Paperless?
  if (paperless) sharedDimensions(part, "front");

  return part;
}