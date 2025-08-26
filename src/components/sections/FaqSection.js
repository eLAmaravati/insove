import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function FaqSection()
{
  const faqs = [
    {
      faqQuestion: 'How do I schedule an appointment?',
      faqAnswer: 'Scheduling an appointment at Insove Medical Healthcare is simple and convenient. You have several options: \n\nFirst, you can call our main office during business hours. Our staff will assist you in finding a suitable time and the appropriate healthcare provider.\n\nSecond, you can visit our website and use the online appointment scheduling tool available at any time. \n\nLastly, if you are an existing patient, you can log into our patient portal to schedule, reschedule, or cancel appointments easily. \n\nOur team is here to help you every step of the way, ensuring you receive the care you need at a time that works for you.',
    },
    {
      faqQuestion: 'What insurance plans do you accept?',
      faqAnswer: 'At Insove Medical Healthcare, we accept a wide range of insurance plans to accommodate our patients diverse needs. Whether you have private insurance, Medicare, or Medicaid, our goal is to provide accessible healthcare services while minimizing out-of-pocket costs. Our billing department is available to assist you in understanding your coverage and any potential expenses associated with your visit. Rest assured, we strive to make quality healthcare accessible and affordable for all our patients, regardless of their insurance provider.'
    },
    {
      faqQuestion: 'Why to believe with Insove medical healthcare?',
      faqAnswer: 'At Insove Medical Healthcare, we pride ourselves on providing exceptional medical services with a team of highly qualified and experienced professionals. Our state-of-the-art facilities and comprehensive range of services ensure accurate diagnostics, effective treatments, and personalized patient care. We adhere to stringent quality and safety standards, ensuring that our patients receive the best possible care in a comfortable and safe environment.\n\nOur patient-centered approach prioritizes clear communication and individualized care plans, empowering you to make informed decisions about your health. With a strong reputation built on trust and positive feedback from our community, Insove is dedicated to delivering compassionate, respectful, and top-quality healthcare.'
    },
    {
      faqQuestion: 'Will we get healthcare updates after surgery?',
      faqAnswer: 'Yes, at Insove Medical Healthcare, we prioritize continuous care and communication with our patients. After your surgery, our medical team will provide regular updates on your recovery progress. We ensure that you and your family are well-informed about post-operative care, any necessary follow-up appointments, and any additional treatments or precautions required for a smooth recovery. Our commitment to your health extends beyond the operating room, ensuring you receive comprehensive support during your healing process.'
    },
    {
      faqQuestion: 'What is the cost for just repairing?',
    faqAnswer: 'The cost for a medical procedure, including repairs, can vary widely depending on the specific treatment needed, the complexity of the case, and other individual factors. At Insove Medical Healthcare, we offer transparent pricing and will provide you with a detailed estimate after an initial consultation. Our team will discuss the costs involved, including any additional fees for tests, anesthesia, and follow-up care, ensuring you have a clear understanding of the financial aspects before proceeding with the treatment.'
    },
    {
      faqQuestion: 'What time will it take to finish my roofing?',
      faqAnswer: 'The time required to complete your roofing project depends on several factors, including the size and complexity of the roof, the type of materials used, and the current weather conditions. Typically, a standard roofing job can take anywhere from a few days to a couple of weeks. During your initial consultation, our team at Insove Medical Healthcare will provide you with a more accurate timeline based on an assessment of your specific needs and circumstances. We strive to complete all projects efficiently while ensuring the highest standards of quality and safety.'
    },
    {
      faqQuestion: 'Do you offer emergency services?',
      faqAnswer: 'Yes, at Insove Medical Healthcare, we provide comprehensive emergency services around the clock. Our dedicated emergency department is staffed with highly trained medical professionals ready to handle urgent medical situations with the utmost care and urgency. Whether you are facing a sudden illness, injury, or medical crisis, you can rely on us to deliver prompt and effective emergency care when you need it most.'
    }
  ]
  return (
    <section>
      <div className="container">
        <h2 className='text-center text-4xl font-semibold'>We&apos;ve Got Answers</h2>

        <div className="mx-auto mt-7 w-full max-w-screen-md divide-y divide-neutral/5 rounded-xl bg-neutral/5">
          { faqs.map((faq, index) => (
            <Disclosure as="div" className="p-6" defaultOpen={ false }>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="font-semibold group-data-[hover]:text-neutral-700 group-data-[open]:text-neutral-700">
                  { faq.faqQuestion }
                </span>
                <ChevronDownIcon className="size-5 fill-neutral/60 group-data-[hover]:fill-neutral/50 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-sm/6">
                { faq.faqAnswer.split('\n\n').map((paragraph, index) => (
                  <p key={ index } className='mb-2'>{ paragraph }</p>
                )) }
              </DisclosurePanel>
            </Disclosure>
          )) }
        </div>
      </div>
    </section>
  );
}