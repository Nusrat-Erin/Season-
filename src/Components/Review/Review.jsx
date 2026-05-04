import user1 from '/src/assets/user1.jpg'
import user2 from '/src/assets/user2.jpg'
import user3 from '/src/assets/user3.jpg'

const Review = () => {
    return (
        <>
        {/* <img src="/src/assets/user1.jpg" alt="" /> */}
               <div className="max-w-6xl mx-auto px-5 my-20 grid grid-cols-1  justify-center items-center ">
        <div>
          <h1 className="text-3xl font-bold text-center mb-10">
            Word from our Customers
          </h1>
        </div>
        <div>
          <div className="carousel w-full rounded-xl shadow-lg border">
            <div
              id="slides1"
              className="carousel-item relative w-full py-10"
            >
              <div className="w-full  flex flex-col justify-center items-center">
                <div className="w-28">
                  <img className="rounded-full" src={user1} alt="" />
                </div>
                <div className="text-gray-600 font-poopins mt-3">
                  <div className="container px-5 mx-auto">
                    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                      <p className="text-lg">
                      I had a fantastic dining experience at this restaurant. The website made it super easy to browse the menu and make a reservation. The photos of the dishes were mouthwatering and helped me decide what to order. The online booking system was a breeze, and when I arrived, my table was ready as promised. The food was delicious, and the service was top-notch. I'll definitely be returning soon!
                      </p>
                      <span className="inline-block h-1 w-10 rounded bg-orange-500 mt-3 mb-4"></span>
                      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                        Mohol lal
                      </h2>
                      <p className="text-gray-500">Goverment officer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slides3" className="btn btn-circle bg-transparent">
                  ❮
                </a>
                <a href="#slides2" className="btn btn-circle bg-transparent">
                  ❯
                </a>
              </div>
            </div>

            <div
              id="slides2"
              className="carousel-item relative w-full"
            >
              <div className="w-full  flex flex-col justify-center items-center">
                <div className="w-28">
                  <img className="rounded-full" src={user2} alt="" />
                </div>
                <div className="text-gray-600 font-poopins mt-3">
                  <div className="container px-5 mx-auto">
                    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                      <p className="text-lg md:px-10">
                      I've used this restaurant's website a few times now. The layout is clean and user-friendly, making it simple to find information on the menu, hours, and location. Online ordering for takeout is a great feature, and it has always been accurate and on time. My only suggestion for improvement is to add more pictures of the dishes; it would help customers get a better sense of what to expect.
                      </p>
                      <span className="inline-block h-1 w-10 rounded bg-orange-500 mt-3 mb-4"></span>
                      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                        Rashed khan
                      </h2>
                      <p className="text-gray-500">Banker</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slides1" className="btn btn-circle bg-transparent">
                  ❮
                </a>
                <a href="#slides3" className="btn btn-circle bg-transparent">
                  ❯
                </a>
              </div>
            </div>

            <div
              id="slides3"
              className="carousel-item relative w-full"
            >
              <div className="w-full  flex flex-col justify-center items-center">
                <div className="w-28">
                  <img className="rounded-full" src={user3} alt="" />
                </div>
                <div className="text-gray-600 font-poopins mt-3">
                  <div className="container px-5 mx-auto">
                    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                      <p className="text-lg md:px-10">
                      The restaurant's website is decent, but I had a minor issue with my recent experience. I wanted to make a reservation for a special occasion, but the reservation form on the site was a bit glitchy. It took a few tries before it went through. Once we arrived, the food was good, but the service was a bit slow, considering it wasn't too busy. It's a nice place, but I hope they can improve the website and service speed.{" "}
                      </p>
                      <span className="inline-block h-1 w-10 rounded bg-orange-500 mt-3 mb-4"></span>
                      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                        Shah Alam
                      </h2>
                      <p className="text-gray-500">Business man</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slides2" className="btn btn-circle bg-transparent">
                  ❮
                </a>
                <a href="#slides1" className="btn btn-circle bg-transparent">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    );
};

export default Review;