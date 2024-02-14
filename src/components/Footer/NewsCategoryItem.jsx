const NewsCategoryItem = ({ name }) => {
  return (
    <li>
      <a href="/" className="text-sm font-semibold">
        {name}
      </a>
    </li>
  );
};

export default NewsCategoryItem;
