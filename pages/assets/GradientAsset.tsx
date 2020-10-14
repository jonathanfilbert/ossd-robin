import * as React from "react"

function GradientAsset(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={353} height={373} viewBox="0 0 353 373" fill="none" {...props}>
      <g filter="url(#prefix__filter0_f)">
        <path
          d="M268 195c0 33.689-27.311 61-61 61s-61-27.311-61-61 27.311-61 61-61 61 27.311 61 61z"
          fill="#B381E4"
        />
      </g>
      <g filter="url(#prefix__filter1_f)">
        <path
          d="M207 227c0 33.689-27.311 61-61 61s-61-27.311-61-61 27.311-61 61-61 61 27.311 61 61z"
          fill="#FFC786"
        />
      </g>
      <g filter="url(#prefix__filter2_f)">
        <path
          d="M207 146c0 33.689-27.311 61-61 61s-61-27.311-61-61 27.311-61 61-61 61 27.311 61 61z"
          fill="#F4EA8F"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_f"
          x={61}
          y={49}
          width={292}
          height={292}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation={42.5} result="effect1_foregroundBlur" />
        </filter>
        <filter
          id="prefix__filter1_f"
          x={0}
          y={81}
          width={292}
          height={292}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation={42.5} result="effect1_foregroundBlur" />
        </filter>
        <filter
          id="prefix__filter2_f"
          x={0}
          y={0}
          width={292}
          height={292}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation={42.5} result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>
  )
}

export default GradientAsset
