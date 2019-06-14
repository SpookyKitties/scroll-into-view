export function scrollIntoView(selector: string, options: Options): void {
  let doc: Document | undefined;
  const timeout = options.timeout ? options.timeout : 0;
  if (options.document !== undefined) {
    doc = options.document;
  } else if (document !== undefined) {
    doc = document;
  } else {
    return;
  }

  try {
    const element = doc.querySelector(selector);
    if (element) {
      setTimeout((): void => {
        element.scrollIntoView();
      }, timeout);
    }
  } catch (error) {}
}

export async function asyncScrollIntoView(selector: string, options: Options): Promise<void> {
  scrollIntoView(selector, options);
}

class Options {
  public document: Document | undefined;
  public timeout: number | undefined;
}
