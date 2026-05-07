import Image from 'next/image'
import Link from 'next/link'

type LogoProps = {
  theme?: 'dark' | 'light'
  height?: number
  linkWrapper?: boolean
}

export default function Logo({ theme = 'dark', height = 32, linkWrapper = true }: LogoProps) {
  const src =
    theme === 'dark'
      ? '/brand/purple_river_logo_dark.PNG'
      : '/brand/purple_river_logo_light.PNG'

  const width = Math.round(height * 3.5)

  const img = (
    <Image
      src={src}
      alt="Purple River"
      width={width}
      height={height}
      priority
      className="object-contain"
      style={{ height, width: 'auto' }}
    />
  )

  if (!linkWrapper) return img

  return (
    <Link href="/" aria-label="Purple River — home">
      {img}
    </Link>
  )
}
