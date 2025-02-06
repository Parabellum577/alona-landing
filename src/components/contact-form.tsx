"use client"

import * as z from "zod"
import { toast } from "sonner"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations, useLocale } from 'next-intl'
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import Link from 'next/link'

const phoneRegex = /^\+?[1-9]\d{1,14}$/

export function ContactForm() {
  const t = useTranslations('contact')
  const locale = useLocale()

  const formSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    serviceType: z.string().min(1),
    message: z.string().min(10),
    contactMethod: z.string().min(1),
    contact: z.string().min(1).refine((val) => {
      if (form.getValues("contactMethod") === "phone") {
        return phoneRegex.test(val)
      }
      return true
    }, {
      message: t('form.validation.phoneNumber')
    }),
    terms: z.boolean().refine((val) => val === true),
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
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error('Response error:', data);
      }

      toast.success(t('form.successMessage'));
      form.reset();
    } catch (error) {
      console.error('Submit error:', error);
      toast.error(t('form.errorMessage'));
    }
  }

  const contactMethod = form.watch("contactMethod")

  return (
    <section id="contact" className="py-16 bg-gray-50 rounded-t-3xl scroll-mt-12">
      <div className="container mx-auto px-4">
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
                        <SelectItem value="numerology">{t('form.numerology')}</SelectItem>
                        <SelectItem value="therapy">{t('form.therapy')}</SelectItem>
                        <SelectItem value="game">{t('form.game')}</SelectItem>
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
      </div>
    </section>
  )
}

