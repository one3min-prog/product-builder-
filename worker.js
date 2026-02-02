export default {
    async fetch(request, env) {
      // ASSETS(=astrology 폴더)에 있는 파일을 찾아 보여줘라!
      return env.ASSETS.fetch(request);
    }
  };