declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpe' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.webp' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  import React from "react";
  const SVG: React.VFV<React.SVGProps<SVGAElement>>;
  export default SVG;
}