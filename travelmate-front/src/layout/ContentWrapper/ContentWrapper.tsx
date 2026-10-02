type ContentWrapperProps = {
    title: string
    children: React.ReactNode
}

export const ContentWrapper = ({ title, children }: ContentWrapperProps) => {
  return (
    <div>
      <title>{title}</title>
      {children}
    </div>
  )
}
