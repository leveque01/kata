class UnicodeFileToHtmTextConverter {
  constructor(fileBlob) {
    this._fileBlob = fileBlob;
  }

  convertToHtml(callback) {
    const self = this;
    const fileReader = new FileReader();
    let text;
    fileReader.onload = (evt) => {
      text = evt.target.result;
      const htmlLines = self._basicHtmlEncode(text);
      if (callback) {
        callback(htmlLines);
      }
    };
    fileReader.readAsText(this._fileBlob);
  }

  _basicHtmlEncode(source) {
    let i = 0;
    let result = [];
    let convertedLine = [];

    const stashNextCharacterAndAdvanceThePointer = () => {
      const c = source.charAt(i);
      i += 1;
      return c;
    };

    let characterToConvert = stashNextCharacterAndAdvanceThePointer();

    const addANewLine = () => {
      convertedLine = convertedLine.join('');
      result.push(convertedLine);
      convertedLine = [];
    };

    const pushACharacterToTheOutput = () => {
      convertedLine.push(characterToConvert);
    };

    while (i <= source.length) {
      switch (characterToConvert) {
        case '<':
          convertedLine.push('&lt;');
          break;
        case '>':
          convertedLine.push('&gt;');
          break;
        case '&':
          convertedLine.push('&amp;');
          break;
        case '\n':
          addANewLine();
          break;
        default:
          pushACharacterToTheOutput();
      }

      characterToConvert = stashNextCharacterAndAdvanceThePointer();
    }

    addANewLine();
    result = result.join('<br />');
    return result;
  }
}

export {
  UnicodeFileToHtmTextConverter,
};
