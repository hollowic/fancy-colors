//Random Hex value
export function generateRandomHexValue() {
  const hex =
    "#" +
    Math.floor(Math.random() * 16777217) //16777216 possible colors according to google
      .toString(16)
      .toUpperCase();
  return hex.padEnd(7, "0");
}

//Validate Hex value
export function validateHexValue(input) {
  if (input.length < 7 && input[0] !== "#") {
    input = "#" + input;
  }
  return /^#([0-9A-F]{3}){1,2}$/i.test(input);
}

//Convert HEX to HSL
export function hexToHsl(hex) {
  // Convert hex to RGB first
  let r = 0,
    g = 0,
    b = 0;
  if (hex.length === 4) {
    r = "0x" + hex[1] + hex[1];
    g = "0x" + hex[2] + hex[2];
    b = "0x" + hex[3] + hex[3];
  } else if (hex.length === 7) {
    r = "0x" + hex[1] + hex[2];
    g = "0x" + hex[3] + hex[4];
    b = "0x" + hex[5] + hex[6];
  }
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  if (delta === 0) h = 0;
  else if (cmax === r) h = ((g - b) / delta) % 6;
  else if (cmax === g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(0);
  l = +(l * 100).toFixed(0);

  return [h, s, l];
}

//Convert HSL to HEX
export function hslToHex(hsl) {
  let h = (hsl[0] /= 360);
  let s = (hsl[1] /= 100);
  let l = (hsl[2] /= 100);
  let r, g, b;
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  const toHex = (x) => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

//Convert HEX to RGB
export function hexToRgb(hex) {
  let r = 0,
    g = 0,
    b = 0;

  // 3 digits
  if (hex.length === 4) {
    r = "0x" + hex[1] + hex[1];
    g = "0x" + hex[2] + hex[2];
    b = "0x" + hex[3] + hex[3];

    // 6 digits
  } else if (hex.length === 7) {
    r = "0x" + hex[1] + hex[2];
    g = "0x" + hex[3] + hex[4];
    b = "0x" + hex[5] + hex[6];
  }

  return [+r, +g, +b];
}

//Convert RGB to HSV
export function rgbToHsv(rgb) {
  let r = rgb[0] / 255;
  let g = rgb[1] / 255;
  let b = rgb[2] / 255;
  let max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    v = max;

  let d = max - min;
  s = max === 0 ? 0 : d / max;

  if (max === min) {
    h = 0; // achromatic
  } else {
    if (max === r) {
      h = (g - b) / d + (g < b ? 6 : 0);
    }
    if (max === g) {
      h = (b - r) / d + 2;
    }
    if (max === b) {
      h = (r - g) / d + 4;
    }

    h *= 60;
  }

  return [Math.round(h), Math.round(s * 100), Math.round(v * 100)];
}

//Convert HSV t RGB
export function hsvToRgb(hsv) {
  let h = hsv[0] / 360;
  let s = hsv[1] / 100;
  let v = hsv[2] / 100;
  let r, g, b, i, f, p, q, t;

  i = Math.floor(h * 6);
  f = h * 6 - i;
  p = v * (1 - s);
  q = v * (1 - f * s);
  t = v * (1 - (1 - f) * s);

  if (i % 6 === 0) {
    r = v;
    g = t;
    b = p;
  }
  if (i % 6 === 1) {
    r = q;
    g = v;
    b = p;
  }
  if (i % 6 === 2) {
    r = p;
    g = v;
    b = t;
  }

  if (i % 6 === 3) {
    r = p;
    g = q;
    b = v;
  }

  if (i % 6 === 4) {
    r = t;
    g = p;
    b = v;
  }

  if (i % 6 === 5) {
    r = v;
    g = p;
    b = q;
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

//Convert RGB to HEX
export function rgbToHex(rgb) {
  let r = (+rgb[0]).toString(16),
    g = (+rgb[1]).toString(16),
    b = (+rgb[2]).toString(16);

  if (r.length === 1) r = "0" + r;
  if (g.length === 1) g = "0" + g;
  if (b.length === 1) b = "0" + b;

  return "#" + r + g + b;
}

//Convert RGB to HSL
export function rgbToHsl(rgb) {
  rgb = rgb.substr(4).split(")")[0].split(",");

  // Make r, g, and b fractions of 1
  let r = rgb[0] / 255,
    g = rgb[1] / 255,
    b = rgb[2] / 255;

  // Find greatest and smallest channel values
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  // Calculate hue
  // No difference
  if (delta === 0) h = 0;
  // Red is max
  else if (cmax === r) h = ((g - b) / delta) % 6;
  // Green is max
  else if (cmax === g) h = (b - r) / delta + 2;
  // Blue is max
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  // Make negative hues positive behind 360°
  if (h < 0) h += 360;

  // Calculate lightness
  l = (cmax + cmin) / 2;

  // Calculate saturation
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  // Multiply l and s by 100
  s = +(s * 100).toFixed(0);
  l = +(l * 100).toFixed(0);

  return "hsl(" + h + "," + s + "%," + l + "%)";
}

//Convert HSL to RGB
export function hslToRgb(hsl) {
  hsl = hsl.substr(4).split(")")[0].split(",");

  let h = hsl[0],
    s = hsl[1].substr(0, hsl[1].length - 1) / 100,
    l = hsl[2].substr(0, hsl[2].length - 1) / 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return "rgb(" + r + "," + g + "," + b + ")";
}

export const RGB_Linear_Shade = (p, c) => {
  let i = parseInt;
  let r = Math.round;
  let a, b, d;
  [a, b, c, d] = c.split(",");
  let P = p < 0;
  let t = P ? 0 : 255 * p;
  P = P ? 1 + p : 1 - p;
  return (
    "rgb" +
    (d ? "a(" : "(") +
    r(i(a[3] === "a" ? a.slice(5) : a.slice(4)) * P + t) +
    "," +
    r(i(b) * P + t) +
    "," +
    r(i(c) * P + t) +
    (d ? "," + d : ")")
  );
};

export function generateShades(initialValue) {
  let rgbArray = hexToRgb(initialValue);
  let rgb = "rgb(" + rgbArray.join(",") + ")";
  let rainbow = [];

  for (let i = 10; i > 0; i--) {
    rainbow.push(
      RGB_Linear_Shade(i / 10, rgb)
        .substr(4)
        .split(")")[0]
        .split(",")
    );
  }

  // rainbow.push(rgbArray);

  for (let i = 0; i < 11; i++) {
    rainbow.push(
      RGB_Linear_Shade(-i / 10, rgb)
        .substr(4)
        .split(")")[0]
        .split(",")
    );
  }

  return rainbow.map((el) => {
    return rgbToHex(el);
  });
}
