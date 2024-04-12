import { useRouteError } from "react-router-dom";
import branding from "../public/branding.jpg";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Text,
} from "@chakra-ui/react";
import { BiWifiOff } from "react-icons/bi";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <div id="error-page" className="flex flex-col items-center">
        <div>
          <Image src={branding} className="rounded-[50%]" />
        </div>

        <Card color="white" backgroundColor="black" width="fit-content">
          <CardHeader>
            <h1>404</h1>
          </CardHeader>
          <CardBody>
            <Text>Sorry, an unexpected error has occurred.</Text>
            <Text>
              {/* @ts-expect-error/ will figure out later */}
              <i>Page {error.statusText || error.message}</i>
            </Text>
          </CardBody>
          <CardFooter className="self-center">
            <BiWifiOff size={"4rem"} />
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
