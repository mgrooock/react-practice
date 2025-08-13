type GivenNameProps = {
  name: string;
};

function GivenName({ name }: GivenNameProps) {
  return <span>名: {name}</span>;
}

export default GivenName;
