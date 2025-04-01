import { Button } from '@/components/ui/button'
import React, { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { dummyInterviews } from '@/constants'
import InterviewCard from '@/components/InterviewCard'
import { getCurrentUser, getInterviewsByUserId, getLatestInterviews } from '@/lib/actions/auth.action'

const page = async () => {
  const user = await getCurrentUser();

  const [userInterviews, latestInterview] = await Promise.all([
    await getInterviewsByUserId(user?.id!),
    await getLatestInterviews({userId: user?.id!})
  ]);

  const hasPastInterview = userInterviews?.length!>0;
  const hasUpcomingInterview = latestInterview?.length!>0;

  return (
    <>
    <section className='card-cta'>
      <div className='flex flex-col gap-6 max-w-lg'>
        <h2>Get Interview Ready with an AI interviewer</h2>
        <p className='text-lg'>
          Practice on real interview questions and get instant feedback
        </p>
        <Button asChild className='btn-primary max-sm:w-full'>
          <Link href='/interview'>Start an interview</Link> 
        </Button>
      </div>
       <Image src = '/Robot.svg' alt = 'Robot' width={400} height={400} className='max-sm:hidden'></Image>
    </section>

    <section className='flex flex-col gap-6 mt-8'>
      <h2> Your interviews </h2>
      <div className='interviews-section'>
        {
          hasPastInterview? (
            userInterviews?.map((interview)=>(
              <InterviewCard {...interview} key={interview.id}/> 
            ))): (
              <p>You haven&apos;t taken any interview yet</p>
            )
        }

      </div>
    </section>

    <section className='flex flex-col gap-6 mt-8'>
      <h2>Take an interview</h2>
      <div className='interviews-section'>
        {
          hasUpcomingInterview? (
            latestInterview?.map((interview)=>(
              <InterviewCard {...interview} key={interview.id}/> 
            ))): (
              <p>You don&apos;t have any new interviews to take  yet</p>
            )
        }
      </div>
    </section>
    </>
  )
}

export default page