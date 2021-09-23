export default function LoadingSVG() {
    return (
        <svg style={{margin: 'auto', background: 'rgb(241, 242, 243)', display: 'block', shapeRendering: 'auto'}} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <g>
                <circle cx={60} cy={50} r={4} fill="#774023">
                    <animate attributeName="cx" repeatCount="indefinite" dur="1s" values="95;35" keyTimes="0;1" begin="-0.67s" />
                    <animate attributeName="fill-opacity" repeatCount="indefinite" dur="1s" values="0;1;1" keyTimes="0;0.2;1" begin="-0.67s" />
                </circle>
                <circle cx={60} cy={50} r={4} fill="#774023">
                    <animate attributeName="cx" repeatCount="indefinite" dur="1s" values="95;35" keyTimes="0;1" begin="-0.33s" />
                    <animate attributeName="fill-opacity" repeatCount="indefinite" dur="1s" values="0;1;1" keyTimes="0;0.2;1" begin="-0.33s" />
                </circle>
                <circle cx={60} cy={50} r={4} fill="#774023">
                    <animate attributeName="cx" repeatCount="indefinite" dur="1s" values="95;35" keyTimes="0;1" begin="0s" />
                    <animate attributeName="fill-opacity" repeatCount="indefinite" dur="1s" values="0;1;1" keyTimes="0;0.2;1" begin="0s" />
                </circle>
            </g><g transform="translate(-15 0)">
            <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#1d0e0b" transform="rotate(90 50 50)" />
            <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#1d0e0b">
                <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;45 50 50;0 50 50" keyTimes="0;0.5;1" />
            </path>
            <path d="M50 50L20 50A30 30 0 0 1 80 50Z" fill="#1d0e0b">
                <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;-45 50 50;0 50 50" keyTimes="0;0.5;1" />
            </path>
        </g>
        </svg>
    )
}