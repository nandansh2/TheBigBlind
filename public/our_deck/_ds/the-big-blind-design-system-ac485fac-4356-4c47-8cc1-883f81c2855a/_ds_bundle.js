/* @ds-bundle: {"format":4,"namespace":"TheBigBlindDesignSystem_ac485f","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Dialog","sourcePath":"components/surfaces/Dialog.jsx"},{"name":"StatCard","sourcePath":"components/surfaces/StatCard.jsx"},{"name":"Tabs","sourcePath":"components/surfaces/Tabs.jsx"},{"name":"Toast","sourcePath":"components/surfaces/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/surfaces/Tooltip.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"8de51b51b77d","components/core/Button.jsx":"60ff800327e0","components/core/IconButton.jsx":"6215b36de256","components/core/Tag.jsx":"b0374814b03d","components/forms/Checkbox.jsx":"db832b8a1bff","components/forms/Input.jsx":"39f3002b90dd","components/forms/Radio.jsx":"b5a2787fe488","components/forms/Select.jsx":"29644be6142d","components/forms/Switch.jsx":"81428f7cada3","components/surfaces/Card.jsx":"a67dc0f6895a","components/surfaces/Dialog.jsx":"8b5fb709820b","components/surfaces/StatCard.jsx":"ec6096e5579e","components/surfaces/Tabs.jsx":"eb2c8bc7d6c7","components/surfaces/Toast.jsx":"361826440bca","components/surfaces/Tooltip.jsx":"4bc380f052a8","ui_kits/marketing/EcosystemPillars.jsx":"dcf249a6b51c","ui_kits/marketing/Footer.jsx":"069527cd6db2","ui_kits/marketing/Hero.jsx":"fb59a69f04de","ui_kits/marketing/MembershipCTA.jsx":"8359ac4cb4fe","ui_kits/marketing/Nav.jsx":"9657d40ff05f","ui_kits/marketing/PortfolioGrid.jsx":"581f0c5bbd8e","ui_kits/platform/DetailPanel.jsx":"4ad211d634d4","ui_kits/platform/PortfolioTable.jsx":"b897da5533e2","ui_kits/platform/Sidebar.jsx":"1aa612e3f605","ui_kits/platform/StatRow.jsx":"271f90e76972","ui_kits/platform/Topbar.jsx":"0f38ee55937f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TheBigBlindDesignSystem_ac485f = window.TheBigBlindDesignSystem_ac485f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = 'neutral'
}) {
  const tones = {
    neutral: {
      background: 'var(--bg-surface-raised)',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-default)'
    },
    accent: {
      background: 'var(--red-tint)',
      color: 'var(--accent)',
      border: '1px solid rgba(212,0,61,0.4)'
    },
    silver: {
      background: 'transparent',
      color: 'var(--silver-light)',
      border: '1px solid var(--silver-mid)'
    }
  };
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '4px 12px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  disabled = false,
  onClick
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 14
    },
    md: {
      padding: '12px 22px',
      fontSize: 15
    },
    lg: {
      padding: '15px 30px',
      fontSize: 16
    }
  };
  const base = {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    letterSpacing: '0.02em',
    borderRadius: 'var(--radius-pill)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    justifyContent: 'center',
    transition: 'background var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)',
    opacity: disabled ? 0.45 : 1,
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: 'var(--accent)',
      color: '#fff',
      borderColor: 'var(--accent)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-primary)',
      borderColor: 'var(--silver-mid)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      borderColor: 'transparent'
    },
    foil: {
      background: 'var(--border-foil)',
      color: '#0A0A0A',
      borderColor: 'transparent',
      fontWeight: 600
    }
  };
  const style = {
    ...base,
    ...variants[variant]
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = {
    primary: {
      background: 'var(--accent-hover)',
      borderColor: 'var(--accent-hover)'
    },
    secondary: {
      background: 'var(--bg-surface-raised)',
      borderColor: 'var(--silver-light)'
    },
    ghost: {
      color: 'var(--text-primary)'
    },
    foil: {
      filter: 'brightness(1.06)'
    }
  };
  return React.createElement('button', {
    disabled,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: hover && !disabled ? {
      ...style,
      ...hoverStyle[variant]
    } : style
  }, icon ? React.createElement('span', {
    style: {
      fontSize: '1.1em',
      lineHeight: 1
    }
  }, icon) : null, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 40,
  onClick,
  disabled = false
}) {
  const variants = {
    ghost: {
      background: 'transparent',
      border: '1px solid var(--border-default)',
      color: 'var(--text-secondary)'
    },
    solid: {
      background: 'var(--bg-surface-raised)',
      border: '1px solid transparent',
      color: 'var(--text-primary)'
    },
    accent: {
      background: 'var(--accent)',
      border: '1px solid var(--accent)',
      color: '#fff'
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverBg = {
    ghost: 'var(--bg-surface-raised)',
    solid: 'var(--surface-3)',
    accent: 'var(--accent-hover)'
  };
  return React.createElement('button', {
    'aria-label': label,
    disabled,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-md)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      fontSize: size * 0.45,
      transition: 'background var(--duration-fast) var(--ease-standard)',
      ...variants[variant],
      ...(hover && !disabled ? {
        background: hoverBg[variant]
      } : {})
    }
  }, icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove
}) {
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 8px 6px 14px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--bg-surface)',
      border: '1px solid var(--border-hairline)',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, children, onRemove ? React.createElement('button', {
    onClick: onRemove,
    'aria-label': 'Remove',
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      fontSize: 13,
      padding: '0 6px',
      lineHeight: 1
    }
  }, '✕') : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-secondary)',
      opacity: disabled ? 0.5 : 1
    }
  }, React.createElement('input', {
    type: 'checkbox',
    checked,
    disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      display: 'none'
    }
  }), React.createElement('span', {
    style: {
      width: 20,
      height: 20,
      borderRadius: 6,
      flexShrink: 0,
      border: `1px solid ${checked ? 'var(--accent)' : 'var(--silver-mid)'}`,
      background: checked ? 'var(--accent)' : 'transparent',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: 12,
      transition: 'background var(--duration-fast) var(--ease-standard)'
    }
  }, checked ? '✓' : ''), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  error,
  disabled = false
}) {
  const [focus, setFocus] = React.useState(false);
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)'
    }
  }, label ? React.createElement('label', {
    style: {
      fontSize: 12,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label) : null, React.createElement('input', {
    type,
    placeholder,
    value,
    disabled,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      background: 'var(--bg-inset)',
      color: 'var(--text-primary)',
      border: `1px solid ${error ? 'var(--accent)' : focus ? 'var(--silver-light)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      padding: '12px 16px',
      fontSize: 15,
      fontFamily: 'var(--font-sans)',
      outline: 'none',
      opacity: disabled ? 0.5 : 1,
      transition: 'border-color var(--duration-fast) var(--ease-standard)'
    }
  }), error ? React.createElement('span', {
    style: {
      fontSize: 12,
      color: 'var(--accent)'
    }
  }, error) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked = false,
  onChange,
  disabled = false
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-secondary)',
      opacity: disabled ? 0.5 : 1
    }
  }, React.createElement('input', {
    type: 'radio',
    checked,
    disabled,
    onChange: () => onChange && onChange(),
    style: {
      display: 'none'
    }
  }), React.createElement('span', {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      flexShrink: 0,
      border: `1px solid ${checked ? 'var(--accent)' : 'var(--silver-mid)'}`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, checked ? React.createElement('span', {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--accent)'
    }
  }) : null), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  placeholder = 'Select…'
}) {
  const [open, setOpen] = React.useState(false);
  const current = options.find(o => o.value === value);
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      position: 'relative'
    }
  }, label ? React.createElement('label', {
    style: {
      fontSize: 12,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label) : null, React.createElement('button', {
    onClick: () => setOpen(o => !o),
    style: {
      background: 'var(--bg-inset)',
      color: current ? 'var(--text-primary)' : 'var(--text-muted)',
      border: `1px solid ${open ? 'var(--silver-light)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      padding: '12px 16px',
      fontSize: 15,
      textAlign: 'left',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'var(--font-sans)',
      cursor: 'pointer'
    }
  }, current ? current.label : placeholder, React.createElement('span', {
    style: {
      color: 'var(--silver-mid)',
      fontSize: 11
    }
  }, '▾')), open ? React.createElement('div', {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      marginTop: 4,
      background: 'var(--bg-surface-raised)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      zIndex: 10,
      boxShadow: 'var(--shadow-md)'
    }
  }, options.map(o => React.createElement('div', {
    key: o.value,
    onClick: () => {
      onChange && onChange(o.value);
      setOpen(false);
    },
    style: {
      padding: '10px 16px',
      fontSize: 14,
      color: 'var(--text-secondary)',
      cursor: 'pointer',
      background: o.value === value ? 'var(--red-tint)' : 'transparent'
    }
  }, o.label))) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, React.createElement('span', {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 40,
      height: 22,
      borderRadius: 'var(--radius-pill)',
      position: 'relative',
      background: checked ? 'var(--accent)' : 'var(--surface-3)',
      border: '1px solid var(--border-default)',
      transition: 'background var(--duration-fast) var(--ease-standard)'
    }
  }, React.createElement('span', {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 20 : 2,
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: '#fff',
      transition: 'left var(--duration-fast) var(--ease-standard)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function Card({
  children,
  tier = 'standard',
  padding = 24
}) {
  const tiers = {
    standard: {
      border: '1px solid var(--border-hairline)',
      boxShadow: 'var(--shadow-sm)'
    },
    premium: {
      border: '1px solid var(--silver-mid)',
      boxShadow: 'var(--shadow-md), var(--shadow-foil-inset)'
    }
  };
  return React.createElement('div', {
    style: {
      background: 'var(--bg-surface)',
      borderRadius: 'var(--radius-card)',
      padding,
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-primary)',
      ...tiers[tier]
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  children,
  footer
}) {
  if (!open) return null;
  return React.createElement('div', {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--overlay-scrim)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100
    }
  }, React.createElement('div', {
    onClick: e => e.stopPropagation(),
    style: {
      width: 420,
      maxWidth: '90vw',
      background: 'var(--bg-surface)',
      border: '1px solid var(--silver-mid)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      fontFamily: 'var(--font-sans)',
      padding: 28
    }
  }, title ? React.createElement('h3', {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 22,
      color: '#fff',
      margin: '0 0 16px'
    }
  }, title) : null, React.createElement('div', {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 15,
      lineHeight: 1.6
    }
  }, children), footer ? React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10,
      marginTop: 24
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/StatCard.jsx
try { (() => {
function StatCard({
  label,
  value,
  delta,
  suit
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--bg-surface)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-card)',
      padding: '20px 22px',
      fontFamily: 'var(--font-sans)',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      minWidth: 160
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, React.createElement('span', {
    style: {
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), suit ? React.createElement('span', {
    style: {
      color: suit === '♥' || suit === '♦' ? 'var(--accent)' : 'var(--silver-light)',
      fontSize: 16
    }
  }, suit) : null), React.createElement('span', {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 32,
      fontWeight: 700,
      color: '#fff'
    }
  }, value), delta ? React.createElement('span', {
    style: {
      fontSize: 13,
      color: delta.startsWith('-') ? 'var(--accent)' : 'var(--silver-light)'
    }
  }, delta) : null);
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Tabs.jsx
try { (() => {
function Tabs({
  tabs,
  active,
  onChange
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border-hairline)',
      fontFamily: 'var(--font-sans)'
    }
  }, tabs.map(t => React.createElement('button', {
    key: t.value,
    onClick: () => onChange && onChange(t.value),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '12px 18px',
      fontSize: 14,
      color: t.value === active ? 'var(--text-primary)' : 'var(--text-muted)',
      borderBottom: `2px solid ${t.value === active ? 'var(--accent)' : 'transparent'}`,
      marginBottom: -1,
      fontWeight: t.value === active ? 500 : 400,
      transition: 'color var(--duration-fast) var(--ease-standard)'
    }
  }, t.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Toast.jsx
try { (() => {
function Toast({
  tone = 'neutral',
  children,
  onClose
}) {
  const tones = {
    neutral: {
      border: '1px solid var(--border-default)'
    },
    success: {
      border: '1px solid var(--silver-mid)'
    },
    error: {
      border: '1px solid var(--accent)'
    }
  };
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: 'var(--surface-2)',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      padding: '14px 18px',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)',
      ...tones[tone]
    }
  }, React.createElement('span', {
    style: {
      color: tone === 'error' ? 'var(--accent)' : 'var(--silver-light)',
      fontSize: 16
    }
  }, tone === 'error' ? '♦' : '♠'), React.createElement('span', {
    style: {
      flex: 1
    }
  }, children), onClose ? React.createElement('button', {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      fontSize: 14
    }
  }, '✕') : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Toast.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children
}) {
  const [show, setShow] = React.useState(false);
  return React.createElement('span', {
    style: {
      position: 'relative',
      display: 'inline-block'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show ? React.createElement('span', {
    style: {
      position: 'absolute',
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--surface-3)',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      border: '1px solid var(--border-default)',
      boxShadow: 'var(--shadow-sm)',
      zIndex: 50
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Tooltip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/EcosystemPillars.jsx
try { (() => {
const pillars = [{
  suit: '♠',
  title: 'Founders',
  copy: 'Pre-seed to Series B capital, plus operators who\u2019ve built the playbook before.'
}, {
  suit: '♥',
  title: 'Investors',
  copy: 'Co-invest alongside a house that sources, diligences, and stays close to the table.'
}, {
  suit: '♣',
  title: 'VCs',
  copy: 'Deal flow, syndication infrastructure, and back-office built for speed.'
}, {
  suit: '♦',
  title: 'Institutions',
  copy: 'A compliant, audited rail into venture — without building the desk yourselves.'
}];
function EcosystemPillars() {
  return /*#__PURE__*/React.createElement("section", {
    id: "ecosystem",
    style: {
      padding: '80px 48px',
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--silver-mid)'
    }
  }, "The ecosystem"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 36,
      color: '#fff',
      fontWeight: 600,
      margin: '12px 0 48px'
    }
  }, "Four seats at one table"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20
    }
  }, pillars.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.title,
    style: {
      background: 'var(--bg-surface)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-card)',
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      color: p.suit === '♥' || p.suit === '♦' ? 'var(--accent)' : 'var(--silver-light)',
      marginBottom: 18
    }
  }, p.suit), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 20,
      color: '#fff',
      fontWeight: 600,
      marginBottom: 10
    }
  }, p.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 14,
      color: 'var(--text-secondary)',
      lineHeight: 1.6
    }
  }, p.copy)))));
}
window.EcosystemPillars = EcosystemPillars;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/EcosystemPillars.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Footer.jsx
try { (() => {
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '40px 48px',
      borderTop: '1px solid var(--border-hairline)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-white.svg",
    alt: "The Big Blind",
    style: {
      height: 22,
      opacity: 0.7
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "\xA9 2026 The Big Blind. All hands in."));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Hero.jsx
try { (() => {
function Hero({
  onCta
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '120px 48px 100px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: 'var(--silver-mid)'
    }
  }, "A venture-building ecosystem"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 'clamp(48px,6vw,84px)',
      fontWeight: 700,
      color: '#fff',
      lineHeight: 1.05,
      maxWidth: 900,
      letterSpacing: '-0.01em'
    }
  }, "The house always builds", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 18,
      color: 'var(--text-secondary)',
      maxWidth: 560,
      lineHeight: 1.6
    }
  }, "Capital, operators, and infrastructure under one roof \u2014 for founders, investors, VCs, and financial institutions who stay at the table."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onCta,
    style: {
      background: 'var(--accent)',
      color: '#fff',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      padding: '15px 30px',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      fontWeight: 500,
      cursor: 'pointer'
    }
  }, "Join the table"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'transparent',
      color: '#fff',
      border: '1px solid var(--silver-mid)',
      borderRadius: 'var(--radius-pill)',
      padding: '15px 30px',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      cursor: 'pointer'
    }
  }, "View portfolio")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      gap: 28,
      fontSize: 40,
      color: 'var(--silver-light)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u2660"), /*#__PURE__*/React.createElement("span", null, "\u2663"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, "\u2665"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, "\u2666")));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/MembershipCTA.jsx
try { (() => {
function MembershipCTA({
  open,
  onOpen,
  onClose,
  onSubmit
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "membership",
    style: {
      padding: '100px 48px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      margin: '0 auto',
      background: 'var(--bg-surface)',
      border: '1px solid var(--silver-mid)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg), var(--shadow-foil-inset)',
      padding: '56px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--silver-mid)',
      fontFamily: 'var(--font-sans)'
    }
  }, "Membership"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 32,
      color: '#fff',
      fontWeight: 700,
      margin: '16px 0'
    }
  }, "Take your seat at the table"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      color: 'var(--text-secondary)',
      fontSize: 16,
      maxWidth: 440,
      margin: '0 auto 28px'
    }
  }, "Applications are reviewed by the house monthly. Founders, investors, and institutions are considered on separate tracks."), /*#__PURE__*/React.createElement("button", {
    onClick: onOpen,
    style: {
      background: 'var(--border-foil)',
      color: '#0A0A0A',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      padding: '15px 34px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 15,
      cursor: 'pointer'
    }
  }, "Request access")), open && /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--overlay-scrim)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 420,
      maxWidth: '90vw',
      background: 'var(--bg-surface)',
      border: '1px solid var(--silver-mid)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: 28,
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 22,
      color: '#fff',
      margin: '0 0 16px'
    }
  }, "Request access"), /*#__PURE__*/React.createElement("input", {
    placeholder: "Full name",
    style: {
      width: '100%',
      boxSizing: 'border-box',
      marginBottom: 12,
      background: 'var(--bg-inset)',
      color: '#fff',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 16px',
      fontFamily: 'var(--font-sans)',
      fontSize: 15
    }
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Email",
    style: {
      width: '100%',
      boxSizing: 'border-box',
      marginBottom: 20,
      background: 'var(--bg-inset)',
      color: '#fff',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 16px',
      fontFamily: 'var(--font-sans)',
      fontSize: 15
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      border: 'none',
      padding: '12px 18px',
      fontFamily: 'var(--font-sans)',
      cursor: 'pointer'
    }
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    onClick: onSubmit,
    style: {
      background: 'var(--accent)',
      color: '#fff',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      padding: '12px 22px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      cursor: 'pointer'
    }
  }, "Submit")))));
}
window.MembershipCTA = MembershipCTA;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/MembershipCTA.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Nav.jsx
try { (() => {
function Nav({
  active,
  onNavigate
}) {
  const links = [{
    label: 'Ecosystem',
    id: 'ecosystem'
  }, {
    label: 'Portfolio',
    id: 'portfolio'
  }, {
    label: 'Membership',
    id: 'membership'
  }];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 48px',
      background: 'rgba(10,10,10,0.9)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-white.svg",
    alt: "The Big Blind",
    style: {
      height: 34
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 36,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      letterSpacing: '0.04em'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("span", {
    key: l.id,
    onClick: () => onNavigate(l.id),
    style: {
      cursor: 'pointer',
      color: active === l.id ? '#fff' : 'var(--text-muted)',
      borderBottom: active === l.id ? '1px solid var(--accent)' : '1px solid transparent',
      paddingBottom: 4
    }
  }, l.label))), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('membership'),
    style: {
      background: 'var(--accent)',
      color: '#fff',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      padding: '10px 22px',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 500,
      cursor: 'pointer'
    }
  }, "Request access"));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/PortfolioGrid.jsx
try { (() => {
const companies = [{
  name: 'Ledgerly',
  stage: 'Series A',
  sector: 'Fintech'
}, {
  name: 'Northfield',
  stage: 'Seed',
  sector: 'Infrastructure'
}, {
  name: 'Vantage Health',
  stage: 'Series B',
  sector: 'Healthtech'
}, {
  name: 'Corridor',
  stage: 'Seed',
  sector: 'Logistics'
}, {
  name: 'Ampfield',
  stage: 'Series A',
  sector: 'Climate'
}, {
  name: 'Roundtable',
  stage: 'Growth',
  sector: 'Fintech'
}];
function PortfolioGrid() {
  const [filter, setFilter] = React.useState('All');
  const sectors = ['All', ...new Set(companies.map(c => c.sector))];
  const shown = filter === 'All' ? companies : companies.filter(c => c.sector === filter);
  return /*#__PURE__*/React.createElement("section", {
    id: "portfolio",
    style: {
      padding: '80px 48px',
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--silver-mid)'
    }
  }, "Portfolio"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 36,
      color: '#fff',
      fontWeight: 600,
      margin: '12px 0 28px'
    }
  }, "Companies at the table"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 28,
      flexWrap: 'wrap'
    }
  }, sectors.map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => setFilter(s),
    style: {
      background: filter === s ? 'var(--red-tint)' : 'transparent',
      color: filter === s ? 'var(--accent)' : 'var(--text-secondary)',
      border: `1px solid ${filter === s ? 'rgba(212,0,61,0.4)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-pill)',
      padding: '8px 18px',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      cursor: 'pointer'
    }
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 18
    }
  }, shown.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.name,
    style: {
      background: 'var(--bg-surface)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-card)',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 19,
      color: '#fff',
      fontWeight: 600
    }
  }, c.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--silver-light)',
      border: '1px solid var(--silver-mid)',
      borderRadius: 'var(--radius-pill)',
      padding: '3px 10px'
    }
  }, c.stage), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-pill)',
      padding: '3px 10px'
    }
  }, c.sector))))));
}
window.PortfolioGrid = PortfolioGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/PortfolioGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/DetailPanel.jsx
try { (() => {
function DetailPanel({
  row,
  onClose
}) {
  if (!row) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--overlay-scrim)',
      display: 'flex',
      justifyContent: 'flex-end',
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 380,
      height: '100%',
      background: 'var(--bg-surface)',
      borderLeft: '1px solid var(--silver-mid)',
      padding: 32,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 24,
      color: '#fff',
      margin: 0
    }
  }, row.name), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--text-muted)',
      fontSize: 16,
      cursor: 'pointer'
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      margin: '16px 0 28px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--silver-light)',
      border: '1px solid var(--silver-mid)',
      borderRadius: 'var(--radius-pill)',
      padding: '4px 10px'
    }
  }, row.stage), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: row.status === 'Active' ? 'var(--accent)' : 'var(--text-muted)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-pill)',
      padding: '4px 10px'
    }
  }, row.status)), [['Check size', row.check], ['Owner track', row.owner], ['Lead', row.owner === 'Founders' ? 'Priya N.' : 'Marcus T.']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '12px 0',
      borderBottom: '1px solid var(--border-hairline)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, v))), /*#__PURE__*/React.createElement("button", {
    style: {
      marginTop: 28,
      width: '100%',
      background: 'var(--accent)',
      color: '#fff',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      padding: '13px 0',
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      cursor: 'pointer'
    }
  }, "Open data room")));
}
window.DetailPanel = DetailPanel;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/DetailPanel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/PortfolioTable.jsx
try { (() => {
const rows = [{
  name: 'Ledgerly',
  stage: 'Series A',
  check: '$2.4M',
  owner: 'Founders',
  status: 'Active'
}, {
  name: 'Northfield',
  stage: 'Seed',
  check: '$500K',
  owner: 'Founders',
  status: 'Active'
}, {
  name: 'Vantage Health',
  stage: 'Series B',
  check: '$6.1M',
  owner: 'Institutions',
  status: 'Closed'
}, {
  name: 'Corridor',
  stage: 'Seed',
  check: '$750K',
  owner: 'VCs',
  status: 'Diligence'
}, {
  name: 'Ampfield',
  stage: 'Series A',
  check: '$3.2M',
  owner: 'Investors',
  status: 'Active'
}];
function statusTone(s) {
  return s === 'Active' ? 'var(--silver-light)' : s === 'Closed' ? 'var(--accent)' : 'var(--text-muted)';
}
function PortfolioTable({
  onSelect
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '0 36px',
      background: 'var(--bg-surface)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
      padding: '14px 22px',
      borderBottom: '1px solid var(--border-hairline)',
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Company"), /*#__PURE__*/React.createElement("span", null, "Stage"), /*#__PURE__*/React.createElement("span", null, "Check"), /*#__PURE__*/React.createElement("span", null, "Owner"), /*#__PURE__*/React.createElement("span", null, "Status")), rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.name,
    onClick: () => onSelect(r),
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
      padding: '16px 22px',
      borderBottom: '1px solid var(--border-hairline)',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-secondary)',
      cursor: 'pointer',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff',
      fontWeight: 500
    }
  }, r.name), /*#__PURE__*/React.createElement("span", null, r.stage), /*#__PURE__*/React.createElement("span", null, r.check), /*#__PURE__*/React.createElement("span", null, r.owner), /*#__PURE__*/React.createElement("span", {
    style: {
      color: statusTone(r.status)
    }
  }, r.status))));
}
window.PortfolioTable = PortfolioTable;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/PortfolioTable.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/Sidebar.jsx
try { (() => {
function Sidebar({
  active,
  onSelect
}) {
  const items = [{
    id: 'overview',
    label: 'Overview',
    icon: '♠'
  }, {
    id: 'portfolio',
    label: 'Portfolio',
    icon: '♣'
  }, {
    id: 'dealflow',
    label: 'Deal Flow',
    icon: '♥'
  }, {
    id: 'settings',
    label: 'Settings',
    icon: '♦'
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 220,
      minHeight: '100vh',
      background: 'var(--bg-surface)',
      borderRight: '1px solid var(--border-hairline)',
      display: 'flex',
      flexDirection: 'column',
      padding: '24px 16px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-white.svg",
    style: {
      height: 28,
      margin: '0 12px 40px'
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id,
    onClick: () => onSelect(it.id),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '11px 14px',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      background: active === it.id ? 'var(--red-tint)' : 'transparent',
      color: active === it.id ? '#fff' : 'var(--text-secondary)',
      fontFamily: 'var(--font-sans)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: active === it.id && (it.icon === '♥' || it.icon === '♦') ? 'var(--accent)' : active === it.id ? 'var(--silver-light)' : 'var(--text-muted)',
      fontSize: 16,
      width: 16,
      textAlign: 'center'
    }
  }, it.icon), it.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 14px',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: 'var(--surface-3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: '#fff'
    }
  }, "JD"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, "Jane Dorsey")));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/StatRow.jsx
try { (() => {
function StatRow() {
  const stats = [{
    label: 'Portfolio',
    value: '42',
    delta: '+3 this quarter',
    suit: '♠'
  }, {
    label: 'Net IRR',
    value: '28.4%',
    delta: '+2.1%',
    suit: '♥'
  }, {
    label: 'Deployed',
    value: '$118M',
    delta: '+$6.2M',
    suit: '♣'
  }, {
    label: 'Dry powder',
    value: '$34M',
    delta: '',
    suit: '♦'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      padding: '28px 36px'
    }
  }, stats.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    style: {
      flex: 1,
      background: 'var(--bg-surface)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-card)',
      padding: '20px 22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-sans)'
    }
  }, s.label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: s.suit === '♥' || s.suit === '♦' ? 'var(--accent)' : 'var(--silver-light)',
      fontSize: 16
    }
  }, s.suit)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 30,
      fontWeight: 700,
      color: '#fff'
    }
  }, s.value), s.delta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--silver-light)',
      fontFamily: 'var(--font-sans)',
      marginTop: 4
    }
  }, s.delta))));
}
window.StatRow = StatRow;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/StatRow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/Topbar.jsx
try { (() => {
function Topbar({
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '24px 36px',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 26,
      color: '#fff',
      fontWeight: 600,
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'var(--accent)',
      color: '#fff',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      padding: '11px 20px',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 500,
      cursor: 'pointer'
    }
  }, "+ New deal"));
}
window.Topbar = Topbar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/Topbar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();
