

import GoBack from "../components/go-back";
import DOMPurify from "dompurify";

const InnerHTML = () => {

    // infected html content
    const content = `<p onClick="alert('Script Injected!!!')">Hello World, this is a content FE receives from BE</p>`

    // sanitized html content
    const cleanContent = DOMPurify.sanitize(content)

  return (
    <>
      <h3>Dangerously Set innerHTML</h3>
      <div dangerouslySetInnerHTML={{__html: cleanContent}}></div>

      {/* jsx handles xss */}
      <p><strong>JSX takes care of scripts: </strong>{cleanContent}</p>
      <GoBack />
    </>
  );
};

export default InnerHTML;
