
export enum TextType {
  // eslint-disable-next-line no-unused-vars
  H1 = 'h1',
  // eslint-disable-next-line no-unused-vars
  H2 = 'h2',
  // eslint-disable-next-line no-unused-vars
  H3 = 'h3',
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
      text: 'What is the Gonstead Method?',
      type: TextType.H1
    },
    {
      text: 'The Gonstead method of chiropractic is a specialized approach that focuses on a thorough assessment and precise adjustments to address spinal and extremity misalignments. Developed by Dr. Clarence S. Gonstead in the 1920s, this method emphasizes a meticulous analysis of the spine using X-rays, palpation, and motion tests to identify specific areas of dysfunction.',
      type: TextType.P
    },
    {
      text: 'Overview',
      type: TextType.H2
    },
    {
      text: 'Central to the Gonstead technique is the principle of finding the "subluxation," which refers to a misalignment or dysfunction in the spine causing nerve interference. By pinpointing these subluxations with precision, chiropractors using the Gonstead method can tailor adjustments to target those areas directly, promoting optimal spinal function and nerve communication.',
      type: TextType.P
    },
    {
      text: 'One of the key benefits for patients undergoing Gonstead chiropractic care is its focus on precision and specificity. Rather than applying generalized adjustments, practitioners using this method aim to make highly targeted corrections, potentially leading to quicker and more effective results.',
      type: TextType.P
    },
    {
      text: 'Additionally, the Gonstead method prioritizes the preservation of joint integrity and biomechanics. By employing specific adjustment techniques, chiropractors strive to restore proper alignment and mobility to the spine, which can alleviate pain, improve range of motion, and enhance overall function. The Gonstead system places a strong emphasis on the dynamics of intervertebral discs as the root cause of subluxations and resulting neurological dysfunction. Therefore, Gonstead doctors are often referred to as "disc doctors," focusing on addressing these underlying issues for the benefit of their patients\' overall health and well-being.',
      type: TextType.P
    },
    {
      text: 'Furthermore, the Gonstead method emphasizes patient comfort and safety throughout the treatment process. Chiropractors using this approach carefully assess each patient\'s unique spinal anatomy and health history to tailor adjustments accordingly, minimizing the risk of adverse effects.',
      type: TextType.P
    },
    {
      text: 'Overall, the Gonstead method offers a comprehensive approach to chiropractic care, focusing on precise assessment and targeted adjustments to optimize spinal health and enhance overall well-being for patients. With its emphasis on specificity, safety, and effectiveness, this technique continues to be the gold standard for those seeking natural, non-invasive solutions to spinal issues and health related concerns.',
      type: TextType.P
    },
    {
      text: '5 Components of the Gonstead Method of Analysis',
      type: TextType.H2
    },
    {
      text: 'X-Ray',
      type: TextType.H3
    },
    {
      text: 'In the Gonstead System, Full Spine X-Rays are crucial, capturing both A-P and Lateral views. These films measure 14" x 36" and include the area from ischia to occiput. Full Spine X-Rays use less radiation compared to sectional films and offer numerous advantages.',
      type: TextType.P
    },
    {
      text: 'They provide an accurate count of vertebrae, offer a comprehensive view of spinal contour for posture analysis with axial weight bearing, and reveal issues beyond the chief complaint. These factors make Full Spine X-Rays indispensable in Gonstead Chiropractic, allowing us to fully analyze and correct a patient\'s condition.',
      type: TextType.P
    },
    {
      text: 'Palpation',
      type: TextType.H3
    },
    {
      text: 'Gonstead Chiropractic employs both Static and Motion Palpation techniques to precisely identify areas of concern. Static Palpation is a hands-on examination that detects changes in contour, tone, texture, and temperature on the patient. Motion Palpation, on the other hand, is used to identify subluxations and their listings.',
      type: TextType.P
    },
    {
      text: '',
      type: TextType.P
    },
    {
      text: 'Instrumentation',
      type: TextType.H3
    },
    {
      text: 'The use of a dual probe instrument, such as the Nervoscope or Delta-T, plays a pivotal role in the Gonstead Technique. It allows for a bilateral temperature comparison of the spine, helping to locate areas of inflammation. The readings obtained through instrumentation indicate the presence of subluxations, their correction progress, and when correction has been achieved.',
      type: TextType.P
    },
    {
      text: 'Visualization',
      type: TextType.H3
    },
    {
      text: 'Visualization begins the moment a patient enters the clinic in the Gonstead System. We carefully observe the patient, taking note of differences in ear, shoulder, and hip heights, posture, and gait. This visual assessment complements the information gathered through X-Rays and Palpation, aiding in the diagnostic process.',
      type: TextType.P
    },
    {
      text: 'Case Management (Symptomatology)',
      type: TextType.H3
    },
    {
      text: 'Although not applied in a rigid "cook-book" manner, understanding a patient\'s health issues helps us determine the specific area that requires adjustment. Symptoms can also assist in differentiating between the two parts of the Autonomic Nervous System (Sympathetic and Parasympathetic) and guide us in delivering precise adjustments.',
      type: TextType.P
    },
  ]
}
