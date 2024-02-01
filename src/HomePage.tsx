import { MapApi } from "./MapApi";
import { useBuild } from "./Provider";

export const HomePage = () => {
  const { activeComponent } = useBuild();
  const isHomePageSelected = activeComponent === "Home";

  return (
    isHomePageSelected && (
      <>
        <div className="flex-center-with-map">
          <img
            className="homePage-Image"
            src="src/assets/c-love-sitting-down.jpg"
            alt=""
          ></img>
          <div className="about-me-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              nisl nisi scelerisque eu. Morbi tincidunt augue interdum velit
              euismod. Nam at lectus urna duis convallis. Neque sodales ut etiam
              sit amet. Sed vulputate odio ut enim blandit volutpat maecenas
              volutpat blandit. Orci sagittis eu volutpat odio facilisis mauris
              sit amet. Tristique et egestas quis ipsum suspendisse ultrices
              gravida dictum fusce. A iaculis at erat pellentesque adipiscing
              commodo elit. Vel risus commodo viverra maecenas accumsan lacus
              vel facilisis volutpat. Sed euismod nisi porta lorem mollis
              aliquam ut. Ultrices dui sapien eget mi proin. Vitae tortor
              condimentum lacinia quis vel eros donec ac odio. Nisl nisi
              scelerisque eu ultrices vitae auctor. Quam nulla porttitor massa
              id. Vestibulum sed arcu non odio euismod. Est lorem ipsum dolor
              sit amet. Est ante in nibh mauris cursus mattis molestie a. In
              nulla posuere sollicitudin aliquam ultrices sagittis.
            </p>
          </div>
          <MapApi />
        </div>
      </>
    )
  );
};
