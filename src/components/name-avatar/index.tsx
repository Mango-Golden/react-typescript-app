/**
 * @author mango
 * @description 用户名通用头像
 */

export interface NameAvatarProps {
  /** 填充颜色(背景) */
  fill?: string
  /** 字体大小 */
  size?: string
  /** 字体颜色 */
  color?: string
  /** 用户名称 */
  name?: string
}

const NameAvatar: React.FC<NameAvatarProps> = (props) => {
  const { fill, name, size, color = 'white' } = props;

  return (
    <svg fill={fill} viewBox="0 0 64 64">
      <circle cx="32" cy="32" r="32"/>
      <text
        fill={color}
        fontSize={size}
        fontWeight={400}
        textAnchor="middle"
        dominantBaseline="middle"
        x={32}
        y={36}
      >
        {name}
      </text>
    </svg>
  );
};

export default NameAvatar;
