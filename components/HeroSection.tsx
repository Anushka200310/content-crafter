import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    <main>
        <div className="mx-auto max-w-2xl h-full px-12 md:px-2 py-32 sm:py-48 lg:py-32">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Explore our new set of AI templates.{' '}
              <Link href="/dashboard" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Revolutionize Your Content Strategy
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Unlock the potential of AI to enhance your online presence. Streamline your content 
            process with our blog idea generation, text improvement, and product description tools
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/dashboard"
                className="rounded-3xl bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
              <Link href="/dashboard/billing" className="flex items-center gap-2 py-2 px-3 text-sm font-semibold leading-6 bg-slate-100 rounded-3xl text-gray-900 hover:bg-slate-200">
                Go pro <span aria-hidden="true"><ArrowRight  />
                </span>
              </Link>
            </div>
          </div>
        </div>
    </main>
  )
}

export default HeroSection