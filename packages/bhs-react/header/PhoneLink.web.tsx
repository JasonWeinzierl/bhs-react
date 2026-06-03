interface PhoneLinkProps {
  url: string;
  display: string;
}

export default function PhoneLink(props: PhoneLinkProps) {
  return (
    <a
      className="underline"
      href={props.url}
    >
      {props.display}
    </a>
  );
}
