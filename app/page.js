import Button from '@/components/button/Button'
import Image from 'next/image'
import Link from 'next/link'

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
            <Image src={'/nLogo1.png'} width={40} height={40} alt='logo' />
            <Image src={'/nLogo2.png'} width={40} height={28} alt='logo' />
            <Image src={'/nLogo3.png'} width={55} height={30} alt='logo' />
            <Image src={'/nLogo4.png'} width={47} height={29} alt='logo' />
            <Image src={'/nLogo5.png'} width={41} height={27} alt='logo' />
            <Image src={'/nLogo6.png'} width={52} height={20} alt='logo' />
            <Image src={'/nLogo7.png'} width={55} height={30} alt='logo' />
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

      </section>
    </>
  )
}
