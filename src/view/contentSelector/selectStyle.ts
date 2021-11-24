// 預覽區塊
export const previewElClassName = 'dotta__preview-el';
const previewElStyle = /* css */ `
.${previewElClassName} {
  background-color: #5a62b3;
  width:100%;
  min-width:100px;
  height:80px;
}
`;

// 選取時元素變化的樣式
export const selectedClassName = 'dotta__selected';
const selectedStyle = /* css */ `
.${selectedClassName} {
  border: #5a62b3 2px solid !important;
  cursor:pointer;
}
`;

export function addStyleTagToDocument():void {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = selectedStyle + previewElStyle;
  document.getElementsByTagName('head')[0].appendChild(styleEl);
}
