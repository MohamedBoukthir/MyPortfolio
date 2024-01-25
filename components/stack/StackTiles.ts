export type StackTile = {
    title: string;
    description: string;
    image: {
      src: string;
      width: number;
      height: number;
    };
  };

  export const workTiles: StackTile[] = [
    {
      description: `Here are some Technologies`,
      title: `I've worked with`,
      image: {
        src: '/static/images/aphex-apps.webp',
        width: 600,
        height: 770,
      },
    },
    {
      description: 'I built Wave',
      title: 'Waves',
      image: {
        src: '/static/images/field-app.webp',
        width: 600,
        height: 554,
      },
    },
    {
      description: `I maintained`,
      title: 'Aphex Planner',
      image: {
        src: '/static/images/planner-app.webp',
        width: 600,
        height: 717,
      },
    },
    {
      description: `I built`,
      title: 'Aphex Publication',
      image: {
        src: '/static/images/publication-app.webp',
        width: 600,
        height: 717,
      },
    },
  ];