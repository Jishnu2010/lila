import { rollupProject } from '@build/rollupProject';

export default rollupProject({
  main: {
    input: 'src/site.ts',
    output: 'lichess.site',
  },
  tv: {
    input: 'src/tv-embed.ts',
    output: 'lichess.tv.embed',
  },
  modUser: {
    input: 'src/mod-user.ts',
    output: 'lichess.mod.user',
  },
});