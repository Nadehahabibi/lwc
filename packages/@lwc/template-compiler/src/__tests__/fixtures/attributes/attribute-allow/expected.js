import { registerTemplate } from "lwc";
function tmpl($api, $cmp, $slotset, $ctx) {
  const { co: api_comment, h: api_element } = $api;
  return [
    api_comment([" Issue #1155 "], []),
    api_element(
      "iframe",
      {
        attrs: {
          allow: "geolocation https://google-developers.appspot.com",
        },
        key: 0,
      },
      []
    ),
  ];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
