import { IconProps, IconWrapper } from '../IconWrapper'

export const ProfileAvatarIcon = (fullProps: IconProps) => {
  const { svgProps: props, ...restProps } = fullProps

  return (
    <IconWrapper
      icon={
        <svg
          fill={'none'}
          height={'100%'}
          viewBox={'0 0 16 16'}
          width={'100%'}
          xmlns={'http://www.w3.org/2000/svg'}
          {...props}
        >
          <path
            d={
              'M8.00004 7.33431C8.52746 7.33431 9.04303 7.17791 9.48156 6.8849C9.92009 6.59188 10.2619 6.1754 10.4637 5.68813C10.6656 5.20086 10.7184 4.66469 10.6155 4.1474C10.5126 3.63012 10.2586 3.15497 9.88566 2.78203C9.51272 2.40909 9.03756 2.15511 8.52028 2.05222C8.003 1.94932 7.46682 2.00213 6.97955 2.20397C6.49228 2.4058 6.07581 2.74759 5.78279 3.18612C5.48977 3.62465 5.33337 4.14023 5.33337 4.66764C5.33337 5.37489 5.61433 6.05317 6.11442 6.55326C6.61452 7.05336 7.2928 7.33431 8.00004 7.33431ZM8.00004 3.33431C8.26375 3.33431 8.52154 3.41251 8.7408 3.55902C8.96007 3.70553 9.13096 3.91376 9.23188 4.1574C9.3328 4.40103 9.3592 4.66912 9.30775 4.92776C9.25631 5.18641 9.12932 5.42398 8.94285 5.61045C8.75638 5.79692 8.5188 5.92391 8.26016 5.97536C8.00152 6.0268 7.73343 6.0004 7.4898 5.89948C7.24616 5.79857 7.03792 5.62767 6.89141 5.4084C6.74491 5.18914 6.66671 4.93135 6.66671 4.66764C6.66671 4.31402 6.80718 3.97488 7.05723 3.72484C7.30728 3.47479 7.64642 3.33431 8.00004 3.33431Z'
            }
            fill={'currentColor'}
          />
          <path
            d={
              'M8.00004 8.66766C6.76236 8.66766 5.57538 9.15933 4.70021 10.0345C3.82504 10.9097 3.33337 12.0967 3.33337 13.3343C3.33337 13.5111 3.40361 13.6807 3.52864 13.8057C3.65366 13.9308 3.82323 14.001 4.00004 14.001C4.17685 14.001 4.34642 13.9308 4.47145 13.8057C4.59647 13.6807 4.66671 13.5111 4.66671 13.3343C4.66671 12.4503 5.0179 11.6024 5.64302 10.9773C6.26814 10.3522 7.11599 10.001 8.00004 10.001C8.8841 10.001 9.73194 10.3522 10.3571 10.9773C10.9822 11.6024 11.3334 12.4503 11.3334 13.3343C11.3334 13.5111 11.4036 13.6807 11.5286 13.8057C11.6537 13.9308 11.8232 14.001 12 14.001C12.1769 14.001 12.3464 13.9308 12.4714 13.8057C12.5965 13.6807 12.6667 13.5111 12.6667 13.3343C12.6667 12.0967 12.175 10.9097 11.2999 10.0345C10.4247 9.15933 9.23772 8.66766 8.00004 8.66766Z'
            }
            fill={'currentColor'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}
