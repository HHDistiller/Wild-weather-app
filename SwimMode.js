// swimMode.js

export function getSwimVerdict({ precipIntensity, uvIndex, windSpeed, airTemp }) {
  if (precipIntensity > 0.5 || uvIndex < 2 || airTemp < 70 || windSpeed > 15) {
    return "🔴 Put the floaties down. Today’s forecast: regret.";
  } else if (
    (precipIntensity <= 0.5 && uvIndex >= 2 && airTemp >= 70) &&
    (uvIndex < 6 || windSpeed < 10)
  ) {
    return "🟡 Technically swimmable, but don’t blame me for goosebumps.";
  } else {
    return "🟢 Cannonball away, my chlorinated champion!";
  }
}
