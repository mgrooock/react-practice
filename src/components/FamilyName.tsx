type FamilyNameProps = {
  name: string;
};

function FamilyName({ name }: FamilyNameProps) {
  return <span>姓: {name}</span>;
}

export default FamilyName;
