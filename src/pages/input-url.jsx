import { useState } from "react";
import DOMPurify from "dompurify";
import GoBack from "../components/go-back";

function isValidURL(url) {
    // Regular expression to match a valid URL
    const urlPattern = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/\S*)?$/i;
  
    return urlPattern.test(url);
  }

const Inputurl = () => {
  const [url, setUrl] = useState("");

  const handleUrl = (event) => {

    const {value: url} = event.target;

   const clean = DOMPurify.sanitize(url, {FORBID_TAGS: ["javascript"]})
   console.log('clean: ', clean);

   setUrl(clean)


  };

  return (
    <>
      <h3>Input URL | Anchor Tag</h3>
      <input
        value={url}
        type="text"
        onChange={handleUrl}
        placeholder="Write url"
      />
      <p>
        <a href={url} title="Website URL" alt="Website URL">
          Visit URL
        </a>
      </p>

      <GoBack />
    </>
  );
};

export default Inputurl;
