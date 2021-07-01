import parse, { domToReact } from 'html-react-parser';
import handler from 'next-translate/useTranslation';

/**
 * Translate HTML and text
 * @returns text or React Node
 */
export function useTranslation() {
  const { t } = handler();
  const options = {
    replace: domNode => {

      if (!domNode.attribs) {
        return;
      }

      if (domNode.attribs.class) {
        domNode.attribs['className'] = domNode.attribs.class;
        delete domNode.attribs.class;
      }

      if (domNode.attribs.classname) {
        domNode.attribs['className'] = domNode.attribs.classname;
        delete domNode.attribs.classname;
      }

      return domToReact(domNode);
    },
  };

  function isHtml(str) {
    return /<\/?[^>]*>/.test(str);
  }

  function translate(tag) {
    let element = t(tag);
    if (isHtml(element)) {
      return parse(element, options);
    }
    return element;
  }

  return { t: translate };
}
