/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Text } from './Typography'
import Icon from './Icon'
import Tooltip from './Tooltip'
import theme from './theme'

let DropdownItem = ({
  icon,
  disabled = false,
  truncate = false,
  children,
  ...props
}) => (
  <div
    css={[
      {
        color: theme.colors.neutrals[8],
        cursor: 'pointer',
        marginTop: theme.spaces.xs,
        marginBottom: theme.spaces.xs,
        marginLeft: icon ? theme.spaces.sm : theme.spaces.md,
        marginRight: theme.spaces.md,
        display: 'grid',
        gridGap: theme.spaces.sm,
        gridTemplateColumns: 'auto 1fr',
        alignItems: 'center',
      },
      disabled
        ? {
            opacity: '50%',
            cursor: 'not-allowed',
          }
        : { '&:hover > *': { color: theme.colors.primaries[0] } },
    ]}
    {...props}
  >
    {icon && <Icon icon={icon} style={{ color: theme.colors.primaries[0] }} />}
    <Text
      small
      css={
        truncate && {
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
        }
      }
      data-tip={truncate ? children : null}
    >
      {children}
    </Text>
    {truncate && <Tooltip />}
  </div>
)

export default DropdownItem