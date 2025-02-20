"use client"

import * as z from "zod"
import { toast } from "sonner"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations, useLocale } from 'next-intl'
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import Link from 'next/link'
import Image from "next/image"

const phoneRegex = /^\+?[1-9]\d{1,14}$/

export function ContactForm() {
  const t = useTranslations('contact')
  const locale = useLocale()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const formSchema = z.object({
    name: z.string({
      required_error: t('form.validation.required'),
    }).min(2, { message: t('form.validation.name.min') }),
    email: z.string({
      required_error: t('form.validation.required'),
    }).email({ message: t('form.validation.email.invalid') }),
    serviceType: z.string({
      required_error: t('form.validation.serviceType.required'),
    }).min(1, { message: t('form.validation.serviceType.required') }),
    message: z.string().optional(),
    contactMethod: z.string({
      required_error: t('form.validation.contactMethod.required'),
    }).min(1, { message: t('form.validation.contactMethod.required') }),
    contact: z.string({
      required_error: t('form.validation.contact.required'),
    }).min(1, {
      message: t('form.validation.contact.required')
    }).refine((val) => {
      if (form.getValues("contactMethod") === "phone") {
        return phoneRegex.test(val)
      }
      return true
    }, {
      message: t('form.validation.phoneNumber')
    }),
    terms: z.boolean().refine((val) => val === true, {
      message: t('form.validation.terms')
    }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      serviceType: "",
      message: "",
      contactMethod: "",
      contact: "",
      terms: false,
    },
  })

  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === 'contactMethod') {
        form.setValue('contact', '')
      }
    })
    return () => subscription.unsubscribe()
  }, [form])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch(`/ru/api/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Failed to send');
      }

      toast.success(t('form.successMessage'));
      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      console.error('Submit error:', error);
      toast.error(t('form.errorMessage'));
    }
  }

  const contactMethod = form.watch("contactMethod")

  const serviceTypes = [
    { value: 'trustSession', label: t('form.trustSession') },
    { value: 'therapy', label: t('form.therapy') },
    { value: 'game', label: t('form.game') },
    { value: 'mac', label: t('form.mac') },
  ];

  return (
    <section id="contact" className="py-16 bg-gray-50 rounded-t-3xl scroll-mt-12">
      <div className="container mx-auto px-4">
        {!isSubmitted ? (
          <>
            <h2 className="text-3xl font-bold text-center mb-8">{t('title')}</h2>
            <div className="max-w-2xl mx-auto">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('form.name')}</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('form.email')}</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="serviceType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('form.serviceType')}</FormLabel>
                        <Select onValueChange={field.onChange}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder={t('form.serviceTypePlaceholder')} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {serviceTypes.map((service) => (
                              <SelectItem key={service.value} value={service.value}>
                                {service.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('form.message')}</FormLabel>
                        <FormControl>
                          <Textarea {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="contactMethod"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('form.contactMethod')}</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder={t('form.contactMethodPlaceholder')} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="telegram">{t('form.telegram')}</SelectItem>
                            <SelectItem value="viber">{t('form.viber')}</SelectItem>
                            <SelectItem value="whatsapp">{t('form.whatsapp')}</SelectItem>
                            <SelectItem value="phone">{t('form.phone')}</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="contact"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          {contactMethod === "phone" 
                            ? t('form.phone') 
                            : t('form.contact')}
                        </FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type={contactMethod === "phone" ? "tel" : "text"}
                            placeholder={contactMethod === "phone" 
                              ? "+380501234567" 
                              : "@username"}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            {t.rich('terms', {
                              privacy: (chunks) => (
                                <Link 
                                  href={locale === 'uk' ? '/uk/privacy-policy' : '/ru/privacy-policy'} 
                                  className="text-primary hover:text-primary-hover underline"
                                >
                                  {chunks}
                                </Link>
                              )
                            })}
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full">
                    {t('form.submit')}
                  </Button>
                </form>
              </Form>
            </div>
          </>
        ) : (
          <div className="max-w-2xl mx-auto text-center space-y-8 min-h-[764px] flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-primary animate-fadeIn">{t('form.thankYou')}</h2>
            <p className="text-lg text-gray-600 animate-fadeIn [animation-delay:200ms]">{t('form.successDetails')}</p>
            <div className="relative w-[400px] h-[400px] mx-auto animate-bounce-scale">
              <Image
                src="/images/buda-lotos.png"
                alt="Success"
                fill
                sizes="100%"
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

