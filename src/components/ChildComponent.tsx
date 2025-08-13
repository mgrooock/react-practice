// src/components/ChildComponent.tsx
type ChildComponentProps = {
  children: React.ReactNode;
};

function ChildComponent({ children }: ChildComponentProps) {
  return <div>{children}</div>;
}

export default ChildComponent;
