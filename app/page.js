import Button from '@/components/button/Button'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'

export default function Home() {
  return (
    <>
      <section>
        {/*Hero Section */}
        <div className='w-full bg-netral-silver h-[599px]'>
          <div className='flex justify-center items-center'>
            <div className='px-36 py-24 flex gap-[104px]'>
              <div className='w-[657px]'>
                <div className='py-20'>
                  <h1 className='text-[64px] font-semibold leading-[74px] text-netral-D_Grey'>Lessons and insights <span className='text-primary'>from 8 years</span></h1>
                  <p className='text-base font-normal leading-6 mt-4'>
                    Where to grow your business as a photographer: site or social media?
                  </p>
                  <Button type='primary' size='medium' className='mt-8'><Link href={'/'}>Register</Link></Button>
                </div>
              </div>
              <div>
                <Image src={'/hero-nexcent.png'} width={391} height={407} alt='Hero' />
              </div>
            </div>
          </div>
        </div>
        {/*Client */}
        <div className='w-full px-36 my-10 flex flex-col items-center gap-4 text-netral-D_Grey'>
          <h2 className='text-4xl font-semibold leading-[44px]'>Our Clients</h2>
          <p className='text-base font-normal leading-6 text-netral-D_Grey'>We have been working with some Fortune 500+ clients</p>
          <div className='w-[1152px] h-[98px] flex justify-between items-center'>
            <Image src={'/logo1.svg'} width={40} height={40} alt='logo' />
            <Image src={'/logo2.svg'} width={40} height={28} alt='logo' />
            <Image src={'/logo3.svg'} width={55} height={30} alt='logo' />
            <Image src={'/logo4.svg'} width={47} height={29} alt='logo' />
            <Image src={'/logo5.svg'} width={41} height={27} alt='logo' />
            <Image src={'/logo6.svg'} width={52} height={20} alt='logo' />
            <Image src={'/logo7.svg'} width={55} height={30} alt='logo' />
          </div>
        </div>
        {/*Community */}
        <div className='w-full'>
          <div className='flex flex-col items-center text-center gap-2'>
            <h2 className='w-[542px] text-4xl font-semibold leading-[44px] text-netral-D_Grey'>Manage your entire community in a single system</h2>
            <p className='text-base font-normal leading-6 text-netral-grey'>
              Who is Nextcent suitable for?
            </p>
          </div>
          <div className='flex px-36 justify-between mt-4'>
            <div className='w-[300px] py-6 px-8 flex flex-col items-center text-center'>
              <div className='pb-4'>
                <div className='w-[50px] h-[49px] rounded-logo bg-color_tint-tint5 absolute' />
                <Image src={'/icon/nIcon1.png'} width={48} height={48} alt='icon' className='relative bottom-2 right-4' />
              </div>
              <h3 className='text-[28px] font-bold leading-9 text-netral-D_Grey pb-4 '>Membership Organisations</h3>
              <p className='text-sm font-normal leading-5 text-netral-grey'>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
            <div className='w-[300px] py-6 px-8 flex flex-col items-center text-center'>
              <div className='pb-4'>
                <div className='w-[50px] h-[49px] rounded-logo bg-color_tint-tint5 absolute' />
                <Image src={'/icon/nIcon2.png'} width={48} height={48} alt='icon' className='relative bottom-2 right-4' />
              </div>
              <h3 className='text-[28px] font-bold leading-9 text-netral-D_Grey pb-4 '>National Associations</h3>
              <p className='text-sm font-normal leading-5 text-netral-grey'>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
            <div className='w-[300px] py-6 px-8 flex flex-col items-center text-center'>
              <div className='pb-4'>
                <div className='w-[50px] h-[49px] rounded-logo bg-color_tint-tint5 absolute' />
                <Image src={'/icon/nIcon3.png'} width={48} height={48} alt='icon' className='relative bottom-2 right-4' />
              </div>
              <h3 className='text-[28px] font-bold leading-9 text-netral-D_Grey pb-4 '>Clubs And Groups</h3>
              <p className='text-sm font-normal leading-5 text-netral-grey'>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
          </div>
        </div>
        {/*Unlock */}
        <div className='w-full px-36'>
          <div className='flex gap-12'>
            <div className='py-[52px]'>
              <Image src={'/Frame-35.png'} width={442} height={329} alt='unlock-img' />
            </div>
            <div className='w-[660px]'>
              <div className='w-[600px] space-y-4 py-36'>
                <h2 className='text-4xl font-semibold leading-[44px] text-netral-D_Grey'>The unseen of spending three years at Pixelgrade</h2>
                <p className='text-sm font-normal leading-5 text-netral-grey pb-8'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                </p>
                <Button type='primary' size='medium'><Link href={'/'}>Learn More</Link></Button>
              </div>
            </div>
          </div>
        </div>
        {/*Achivements */}
        <div className='w-full px-36 py-16 bg-netral-silver flex justify-between'>
          <div className='w-[560px] space-y-2'>
            <h2 className='text-4xl font-semibold leading-[44px] text-netral-D_Grey'>Helping a local <span className='text-primary'>business reinvent itself</span></h2>
            <p className='text-base font-normal leading-6 text-gray-900'>We reached here with our hard work and dedication</p>
          </div>
          <div className='w-[560px] space-y-10'>
            <div className='flex gap-8'>
              <div className='flex gap-4'>
                <Image src={'/icon/nIcon4.png'} width={48} height={48} alt='icon' />
                <div>
                  <h3 className='text-[28px] font-bold leading-9 text-netral-D_Grey'>2,245,341</h3>
                  <p className='text-base font-normal leading-6 text-netral-grey'>Members</p>
                </div>
              </div>
              <div className='flex gap-4'>
                <Image src={'/icon/nIcon5.png'} width={48} height={48} alt='icon' />
                <div>
                  <h3 className='text-[28px] font-bold leading-9 text-netral-D_Grey'>2,245,341</h3>
                  <p className='text-base font-normal leading-6 text-netral-grey'>Members</p>
                </div>
              </div>
            </div>
            <div className='flex gap-8'>
              <div className='flex gap-4'>
                <Image src={'/icon/nIcon6.png'} width={48} height={48} alt='icon' />
                <div>
                  <h3 className='text-[28px] font-bold leading-9 text-netral-D_Grey'>2,245,341</h3>
                  <p className='text-base font-normal leading-6 text-netral-grey'>Members</p>
                </div>
              </div>
              <div className='flex gap-4'>
                <Image src={'/icon/nIcon7.png'} width={48} height={48} alt='icon' />
                <div>
                  <h3 className='text-[28px] font-bold leading-9 text-netral-D_Grey'>2,245,341</h3>
                  <p className='text-base font-normal leading-6 text-netral-grey'>Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Calender */}
        <div className='w-full px-36'>
          <div className='flex gap-12'>
            <div className='py-[52px]'>
              <Image src={'/pana.png'} width={442} height={433} alt='unlock-img' />
            </div>
            <div className='w-[660px]'>
              <div className='w-[600px] space-y-4 py-36'>
                <h2 className='text-4xl font-semibold leading-[44px] text-netral-D_Grey'>How to design your site footer like we did</h2>
                <p className='text-sm font-normal leading-5 text-netral-grey pb-8'>
                  Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
                </p>
                <Button type='primary' size='medium'><Link href={'/'}>Learn More</Link></Button>
              </div>
            </div>
          </div>
        </div>
        {/*Customers */}
        <div className='w-full py-8 px-36 my-12 flex justify-between'>
          <div>
            <Image src={'/tesla.png'} width={326} height={326} alt='tesla' />
          </div>
          <div className='w-[748px]'>
            <p className='text-base font-medium leading-6 text-netral-grey mb-4'>
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
            </p>
            <h4 className='text-xl font-semibold leading-7 text-primary mb-2'>Tim Smith</h4>
            <p className='text-sm font-normal leading-6 text-netral-L_Grey mb-8'>British Dragon Boat Racing Association</p>
            <div className='flex justify-between'>
              <Image src={'/logo1.svg'} width={40} height={40} alt='logo' />
              <Image src={'/logo2.svg'} width={40} height={28} alt='logo' />
              <Image src={'/logo3.svg'} width={55} height={30} alt='logo' />
              <Image src={'/logo4.svg'} width={47} height={29} alt='logo' />
              <Image src={'/logo5.svg'} width={41} height={27} alt='logo' />
              <Image src={'/logo6.svg'} width={52} height={20} alt='logo' />
              <Link href={'/'} className='text-xl font-semibold leading-7 text-primary flex items-center gap-2'>Meet all customers <BsArrowRight /> </Link>
            </div>
          </div>
        </div>
        {/*Community */}
        {/* <div className='w-full'>
          <div className='flex flex-col justify-center items-center text-center'>
            <h2 className='text-4xl font-semibold leading-[44px] text-netral-D_Grey'>Caring is the new marketing</h2>
            <p className='w-[628px] text-base font-normal leading-6 text-netral-grey'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who&apos;s joining the community, read about how our community are increasing their membership income and lot&apos;s more.​</p>
          </div>
          <div className='px-36'>
            <div className='flex flex-col items-center'>
              <Image src={'/image-18.png'} width={368} height={286} alt='community' className='absolute' />
              <div className='p-4 w-[317px] bg-teal-300 relative -bottom-[96px]'>

              </div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  )
}
