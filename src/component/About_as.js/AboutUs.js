const AboutAs = () => {
    return (<div className="w-[80%] h-[80%] flex   justify-center">

        <div className="w-[50%] h-full flex flex-col  items-center ">
            <div className="w-full h-[12%] flex flex-col  items-center">
                <p className="text-[40px] font-semibold text-red-600">FOODY VEGIES</p>
                <p className=" text-red-600"> About Us</p>
            </div>
            <div className="w-full h-[88%] flex flex-col    items-center">
                <p className="text-justify"> <span className="font-bold">Welcome to Foody Veggies! </span> My name is Hillary, and I created Foody Veggies to celebrate how nourishing, fun, and delicious cooking with seasonal fruits and vegetables can be. I hope that the recipes here inspire you to try cooking a new vegetable, or try cooking a familiar vegetable in a new way. You’ll find a host of inventive vegetarian recipes for breakfast, lunch, and dinner, but I also want Love and Lemons to be a resource for you. We have guides to working with vegetables ranging from spaghetti squash to asparagus and tips for cooking plant-based basics like quinoa, rice, and lentils.</p>
                <p className="text-justify  mt-5">And after all those veggies, I always save room for dessert! In my opinion, healthy eating is all about balance, so you’ll find recipes for brownies, cakes, cookies, and more here too.</p>

                <p className="text-justify">
                    <p className="font-bold text-lg mt-6  text-red-600">Frequently Asked Questions:</p>
                    <p className="font-bold mt-6 mb-2  text-red-600">Do I have to be vegetarian to enjoy the recipes?</p>
                    Nope! My meat-eating husband Jack is my #1 taste tester, and he gives each recipe his stamp of approval before I share it. In addition, many of my friends, family, and recipe testers are not vegetarian, and they all try these recipes. Everything you see here is 100% omnivore-approved! When you’re cooking with good-quality seasonal ingredients, the results are going to taste great, whether you’re vegetarian or not.</p>
                <p>
                    <p className="font-bold mb-2 mt-6  text-red-600">What’s your favorite food?</p>
                    Juicy summer peaches are my all-time favorite food. If you’re lucky enough to have some right now, try them in my peach cobbler or peach sangria. Sweet Corn is a close second.
                    </p>
            </div>
        </div>
        <div className="w-[50%] h-full flex flex-col items-center justify-center">
          <div className="w-[90%] h-[50%] ">
          <img src="/images/Tuna-Salad-Stuffed-Avocados-Tamera-Mowry-_1_.png" className="w-[100%] lg:mt-5 h-[100%] object-cover" alt="woman cooking" />
          </div>
            <div className="w-[90%] flex flex-col mt-4 items-start  h-[50%] ">
                <p className="font-bold  text-red-600 lg:mt-3">THE TEAM</p>
                <img src="/images/IMG-6795-Facetune-21-11-2021-13-19-20.jpg" alt="SDsd" className="w-[40%] h-[50%] mt-3" />
                <div className="">
                    <p className="font-bold mt-4  text-red-600">Education</p>
                    <p>University Of Mines And Technology</p>
              
                    <p className="font-bold mt-4  text-red-600">Profession</p>
                    <p>Front-end developer at Amalitech Ghana </p>
                </div>
            </div>
        </div>

    </div>);
}

export default AboutAs;