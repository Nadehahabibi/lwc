import { registerTemplate } from "lwc";
function tmpl($api, $cmp, $slotset, $ctx) {
  const { co: api_comment, t: api_text } = $api;
  return [api_comment(["I am a comment "], []), api_text("Hello world")];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
