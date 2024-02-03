import Content from "./content-interface";

class ContentList {
    private contentArray: Content[];

    constructor() {
        this.contentArray = [];
    }

    get content(): Content[] {
        return this.contentArray;
    }

    add(contentItem: Content): void {
        this.contentArray.push(contentItem);
    }

    getItemCount(): number {
        return this.contentArray.length;
    }

    getContentHtml(index: number): string {
        if (index < 0 || index >= this.contentArray.length) {
            return '<p style="color: red;">Invalid index </p>';
        }

    const { title, description, creator, imgURL, type } = this.contentArray[index];
    const imgTag = imgURL ? `<img src="${imgURL}" alt="Content Image">` : '';

    return `
      <div>
        <h2>${title}</h2>
        <p>Description: ${description}</p>
        <p>Creator: ${creator}</p>
        ${imgTag}
        <p>Type: ${type}</p>
      </div>
    `;


    }
}

export default ContentList;