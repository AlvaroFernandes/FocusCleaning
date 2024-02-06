import { Button, Html } from "@react-email/components";

export function Email(props) {
  const { url } = props;

  return (
    <Html lang="en">
      <Button href={url}>click me</Button>
    </Html>
  );
}
