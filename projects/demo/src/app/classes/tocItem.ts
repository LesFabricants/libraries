export class TOCItem {
  parent?: TOCItem | null = null;
  level: number = 0;
  el!: HTMLHeadingElement;
  name: string = "";
  subitems: TOCItem[] = [];

  constructor(el: HTMLHeadingElement) {
    this.level = Number(el.tagName.charAt(1));
    this.name = el.textContent!;
    this.el = el;
    this.subitems = [];
  }

  addSubitem(subitem: TOCItem) {
    subitem.parent = this;
    this.subitems.push(subitem);
  }
};
