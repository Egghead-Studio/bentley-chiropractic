
export enum TextType {
  // eslint-disable-next-line no-unused-vars
  H1 = 'h1',
  // eslint-disable-next-line no-unused-vars
  H2 = 'h2',
  // eslint-disable-next-line no-unused-vars
  P = 'p',
}
export interface SectionText {
  text: string
  type: TextType
}
export const sectionTextMap: Record<string, SectionText[]> = {
  'headaches': [
    {
      text: 'Headaches',
      type: TextType.H1
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet venenatis urna cursus eget. Tempor commodo ullamcorper a lacus vestibulum sed. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Urna id volutpat lacus laoreet non. Libero enim sed faucibus turpis in. Tristique sollicitudin nibh sit amet commodo nulla. Pharetra massa massa ultricies mi quis. Lacus luctus accumsan tortor posuere ac ut consequat semper. Elit eget gravida cum sociis natoque penatibus et magnis dis. A diam sollicitudin tempor id eu nisl nunc. Id consectetur purus ut faucibus pulvinar elementum integer enim. Massa vitae tortor condimentum lacinia quis vel eros donec. Cursus mattis molestie a iaculis at erat. Vitae tortor condimentum lacinia quis vel eros. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum. Ut morbi tincidunt augue interdum velit. Nunc consequat interdum varius sit amet mattis vulputate.',
      type: TextType.P
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet venenatis urna cursus eget. Tempor commodo ullamcorper a lacus vestibulum sed. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Urna id volutpat lacus laoreet non. Libero enim sed faucibus turpis in. Tristique sollicitudin nibh sit amet commodo nulla. Pharetra massa massa ultricies mi quis. Lacus luctus accumsan tortor posuere ac ut consequat semper. Elit eget gravida cum sociis natoque penatibus et magnis dis. A diam sollicitudin tempor id eu nisl nunc. Id consectetur purus ut faucibus pulvinar elementum integer enim. Massa vitae tortor condimentum lacinia quis vel eros donec. Cursus mattis molestie a iaculis at erat. Vitae tortor condimentum lacinia quis vel eros. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum. Ut morbi tincidunt augue interdum velit. Nunc consequat interdum varius sit amet mattis vulputate.',
      type: TextType.P
    }
  ],
  'gonstead-method': [
    {
      text: 'Gonstead Method',
      type: TextType.H1
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet venenatis urna cursus eget. Tempor commodo ullamcorper a lacus vestibulum sed. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Urna id volutpat lacus laoreet non. Libero enim sed faucibus turpis in. Tristique sollicitudin nibh sit amet commodo nulla. Pharetra massa massa ultricies mi quis. Lacus luctus accumsan tortor posuere ac ut consequat semper. Elit eget gravida cum sociis natoque penatibus et magnis dis. A diam sollicitudin tempor id eu nisl nunc. Id consectetur purus ut faucibus pulvinar elementum integer enim. Massa vitae tortor condimentum lacinia quis vel eros donec. Cursus mattis molestie a iaculis at erat. Vitae tortor condimentum lacinia quis vel eros. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum. Ut morbi tincidunt augue interdum velit. Nunc consequat interdum varius sit amet mattis vulputate.',
      type: TextType.P
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet venenatis urna cursus eget. Tempor commodo ullamcorper a lacus vestibulum sed. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Urna id volutpat lacus laoreet non. Libero enim sed faucibus turpis in. Tristique sollicitudin nibh sit amet commodo nulla. Pharetra massa massa ultricies mi quis. Lacus luctus accumsan tortor posuere ac ut consequat semper. Elit eget gravida cum sociis natoque penatibus et magnis dis. A diam sollicitudin tempor id eu nisl nunc. Id consectetur purus ut faucibus pulvinar elementum integer enim. Massa vitae tortor condimentum lacinia quis vel eros donec. Cursus mattis molestie a iaculis at erat. Vitae tortor condimentum lacinia quis vel eros. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum. Ut morbi tincidunt augue interdum velit. Nunc consequat interdum varius sit amet mattis vulputate.',
      type: TextType.P
    },
    {
      text: '1. Instrumentation',
      type: TextType.H2
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet venenatis urna cursus eget. Tempor commodo ullamcorper a lacus vestibulum sed. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Urna id volutpat lacus laoreet non. Libero enim sed faucibus turpis in. Tristique sollicitudin nibh sit amet commodo nulla. Pharetra massa massa ultricies mi quis. Lacus luctus accumsan tortor posuere ac ut consequat semper. Elit eget gravida cum sociis natoque penatibus et magnis dis. A diam sollicitudin tempor id eu nisl nunc. Id consectetur purus ut faucibus pulvinar elementum integer enim. Massa vitae tortor condimentum lacinia quis vel eros donec. Cursus mattis molestie a iaculis at erat. Vitae tortor condimentum lacinia quis vel eros. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum. Ut morbi tincidunt augue interdum velit. Nunc consequat interdum varius sit amet mattis vulputate.',
      type: TextType.P
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet venenatis urna cursus eget. Tempor commodo ullamcorper a lacus vestibulum sed. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Urna id volutpat lacus laoreet non. Libero enim sed faucibus turpis in. Tristique sollicitudin nibh sit amet commodo nulla. Pharetra massa massa ultricies mi quis. Lacus luctus accumsan tortor posuere ac ut consequat semper. Elit eget gravida cum sociis natoque penatibus et magnis dis. A diam sollicitudin tempor id eu nisl nunc. Id consectetur purus ut faucibus pulvinar elementum integer enim. Massa vitae tortor condimentum lacinia quis vel eros donec. Cursus mattis molestie a iaculis at erat. Vitae tortor condimentum lacinia quis vel eros. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum. Ut morbi tincidunt augue interdum velit. Nunc consequat interdum varius sit amet mattis vulputate.',
      type: TextType.P
    },
    {
      text: '2. Observation',
      type: TextType.H2
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet venenatis urna cursus eget. Tempor commodo ullamcorper a lacus vestibulum sed. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Urna id volutpat lacus laoreet non. Libero enim sed faucibus turpis in. Tristique sollicitudin nibh sit amet commodo nulla. Pharetra massa massa ultricies mi quis. Lacus luctus accumsan tortor posuere ac ut consequat semper. Elit eget gravida cum sociis natoque penatibus et magnis dis. A diam sollicitudin tempor id eu nisl nunc. Id consectetur purus ut faucibus pulvinar elementum integer enim. Massa vitae tortor condimentum lacinia quis vel eros donec. Cursus mattis molestie a iaculis at erat. Vitae tortor condimentum lacinia quis vel eros. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum. Ut morbi tincidunt augue interdum velit. Nunc consequat interdum varius sit amet mattis vulputate.',
      type: TextType.P
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet venenatis urna cursus eget. Tempor commodo ullamcorper a lacus vestibulum sed. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Urna id volutpat lacus laoreet non. Libero enim sed faucibus turpis in. Tristique sollicitudin nibh sit amet commodo nulla. Pharetra massa massa ultricies mi quis. Lacus luctus accumsan tortor posuere ac ut consequat semper. Elit eget gravida cum sociis natoque penatibus et magnis dis. A diam sollicitudin tempor id eu nisl nunc. Id consectetur purus ut faucibus pulvinar elementum integer enim. Massa vitae tortor condimentum lacinia quis vel eros donec. Cursus mattis molestie a iaculis at erat. Vitae tortor condimentum lacinia quis vel eros. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum. Ut morbi tincidunt augue interdum velit. Nunc consequat interdum varius sit amet mattis vulputate.',
      type: TextType.P
    },
    {
      text: '3. Measurement',
      type: TextType.H2
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet venenatis urna cursus eget. Tempor commodo ullamcorper a lacus vestibulum sed. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Urna id volutpat lacus laoreet non. Libero enim sed faucibus turpis in. Tristique sollicitudin nibh sit amet commodo nulla. Pharetra massa massa ultricies mi quis. Lacus luctus accumsan tortor posuere ac ut consequat semper. Elit eget gravida cum sociis natoque penatibus et magnis dis. A diam sollicitudin tempor id eu nisl nunc. Id consectetur purus ut faucibus pulvinar elementum integer enim. Massa vitae tortor condimentum lacinia quis vel eros donec. Cursus mattis molestie a iaculis at erat. Vitae tortor condimentum lacinia quis vel eros. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum. Ut morbi tincidunt augue interdum velit. Nunc consequat interdum varius sit amet mattis vulputate.',
      type: TextType.P
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet venenatis urna cursus eget. Tempor commodo ullamcorper a lacus vestibulum sed. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Urna id volutpat lacus laoreet non. Libero enim sed faucibus turpis in. Tristique sollicitudin nibh sit amet commodo nulla. Pharetra massa massa ultricies mi quis. Lacus luctus accumsan tortor posuere ac ut consequat semper. Elit eget gravida cum sociis natoque penatibus et magnis dis. A diam sollicitudin tempor id eu nisl nunc. Id consectetur purus ut faucibus pulvinar elementum integer enim. Massa vitae tortor condimentum lacinia quis vel eros donec. Cursus mattis molestie a iaculis at erat. Vitae tortor condimentum lacinia quis vel eros. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum. Ut morbi tincidunt augue interdum velit. Nunc consequat interdum varius sit amet mattis vulputate.',
      type: TextType.P
    }
  ]
}
