import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

function Header() {
  return (
    <header className=" flex sticky top-0 items-center z-50 px-4 py-2 shadow-md  bg-white">
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="  h-20 w-20 border-0"
      >
        <Icon name="menu" size="3xl" />
      </Button>
      <Icon name="description" size="5xl" color="blue" />
      <h1 className="ml-2 text-gray-700 text-2xl">Docs</h1>
      <div className=" mx-5 md:mx-20 flex flex-grow px-5 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:shadow-md ">
        <Icon name="search" size="3xl" color="gray" />
        <input
          type="text"
          placeholder="Search"
          className="flex-grow px-5 bg-transparent text-base outline-none"
        />
      </div>
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className=" ml-5 md:ml-20 h-20 w-20 border-0"
      >
        <Icon name="apps" size="3xl" color="gray" />
      </Button>
      <img
        loading="lazy"
        // onClick={signOut}
        className="cursor-pointer h-12 w-12 rounded-full ml-2"
        alt=""
        src="https://media-exp1.licdn.com/dms/image/C5603AQFoD5cDW6zp9A/profile-displayphoto-shrink_200_200/0/1598563155377?e=1633564800&v=beta&t=1XMzZui8br4m8Wl9-H5Tk0QHpZYehpCMHtM6ufaU4xI"
      />
    </header>
  );
}

export default Header;
