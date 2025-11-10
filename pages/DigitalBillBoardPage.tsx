import React, { useState, useEffect } from 'react';
import Section from '../components/Section';
import { billboardServices, billboardBenefits } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowRightCircleIcon } from '../components/icons/TechIcons';

const DigitalBillBoardPage: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop', 
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop', 
        'https://images.unsplash.com/photo-1600880292203-942bb68b3131?q=80&w=1200&auto=format&fit=crop'
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [slides.length]);
    
    const chartMonths = ['янв', 'февр', 'март', 'апр', 'май', 'июнь', 'июль', 'авг', 'сент', 'окт', 'нояб', 'дек'];
    const line1Points = "0,80 30,75 60,85 90,70 120,60 150,40 180,30 210,35 240,50 270,65 300,75 330,80";
    const line2Points = "0,60 30,58 60,55 90,50 120,35 150,20 180,10 210,15 240,25 270,40 300,50 330,55";

    return (
    <div className="bg-gray-50 pt-12">
        {/* Hero Section */}
        <Section className="!pt-0">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <p className="text-gray-500 font-medium">ХотТур - международное турагентство</p>
                    <h1 className="text-3xl font-bold text-gray-900 mt-4 leading-tight">Открой турагентство по франшизе и получай от <span className="text-red-500">258 000 ₽</span> чистой прибыли в месяц</h1>
                    <div className="grid sm:grid-cols-2 gap-6 mt-6">
                        <div className="p-4 border-2 border-dashed border-gray-200 rounded-lg">
                            <h3 className="font-semibold text-gray-800">Идеальный вариант для первого бизнеса</h3>
                            <p className="text-sm text-gray-600">опыт в сфере не важен</p>
                        </div>
                        <div className="p-4 border-2 border-dashed border-gray-200 rounded-lg">
                            <h3 className="font-semibold text-gray-800">Срок окупаемости</h3>
                            <p className="text-sm text-gray-600">от 3 месяцев — при открытии в сезон — даже без офиса</p>
                        </div>
                    </div>
                    <div className="mt-6 p-4 bg-gray-100 rounded-lg text-center">
                        <p className="font-medium text-gray-700">Получи детальный расчет выхода на прибыль от <span className="text-red-500">258 000 ₽</span> в месяц</p>
                        <button className="mt-3 w-full sm:w-auto px-8 py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition-colors shadow-lg">
                            Оставить заявку
                        </button>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <img src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=800&auto=format&fit=crop" alt="Digital Billboard Office" className="rounded-2xl shadow-lg" />
                </div>
            </div>
        </Section>

        {/* Services Section */}
        <Section>
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900">ХотТур — агентство, <br/>с которым легко отдыхать!</h2>
                    <p className="mt-2 text-gray-600">Реализуй самые востребованные туристические услуги</p>
                    <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {billboardServices.map((service, index) => (
                            <div key={index} className="p-4 bg-gray-100 rounded-lg text-center transition-shadow hover:shadow-md">
                                <service.icon className="w-8 h-8 text-red-500 mx-auto mb-2"/>
                                <h4 className="font-semibold text-sm text-gray-800">{service.title}</h4>
                                <p className="text-xs text-gray-500">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative h-80 overflow-hidden rounded-2xl shadow-lg">
                    {slides.map((slide, index) => (
                        <img key={index} src={slide} alt={`Slide ${index + 1}`} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`} />
                    ))}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {slides.map((_, index) => (
                            <button key={index} onClick={() => setCurrentSlide(index)} className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}></button>
                        ))}
                    </div>
                </div>
            </div>
        </Section>

        {/* ROI Section */}
        <Section>
            <div className="max-w-6xl mx-auto text-center mb-12">
                 <h2 className="text-3xl font-bold text-gray-900">Сколько можно заработать <br/> в турагентстве <span className="text-red-500">ХотТур</span></h2>
            </div>
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-stretch">
                <div className="bg-red-500 text-white p-8 rounded-2xl shadow-lg flex flex-col justify-between">
                    <div>
                        <p className="font-semibold">Стартуй до начала сезона — и начинай зарабатывать сразу</p>
                        <div className="my-6 p-6 bg-white text-gray-900 rounded-lg text-center">
                            <p className="text-3xl font-bold">45 туров <span className="text-gray-400 mx-2">x</span> 12 500 ₽</p>
                            <p className="text-sm text-gray-500">среднее кол-во продаж в месяц — в любой сезон / комиссия за тур</p>
                        </div>
                        <div>
                            <p className="flex justify-between items-center"><span>Оборот:</span> <span className="font-bold text-xl">562 500 ₽</span></p>
                            <div className="w-full bg-red-400 h-2 rounded-full my-2"><div className="w-[100%] bg-white h-2 rounded-full"></div></div>
                            <p className="flex justify-between items-center"><span>Расходы:</span> <span className="font-bold text-xl">304 000 ₽</span></p>
                            <div className="w-full bg-red-400 h-2 rounded-full my-2"><div className="w-[54%] bg-white h-2 rounded-full"></div></div>
                        </div>
                        <div className="mt-6 p-4 bg-white text-gray-900 rounded-lg text-center">
                            <p className="text-gray-500">Чистая прибыль от</p>
                            <p className="text-4xl font-bold text-red-500">258 000 ₽</p>
                        </div>
                    </div>
                    <button className="mt-8 w-full py-3 bg-white text-red-500 font-semibold rounded-full hover:bg-red-50 transition-colors">
                        Скачать фин. модель
                    </button>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h3 className="font-bold text-center text-gray-800">График выручки в турагенстве ХотТур в первые два года работы</h3>
                    <div className="relative mt-6">
                        <svg viewBox="0 0 360 100" className="w-full h-auto">
                            {/* Grid Lines */}
                            {[...Array(5)].map((_, i) => (
                                <line key={i} x1="0" y1={i * 25} x2="360" y2={i * 25} stroke="#e5e7eb" strokeWidth="0.5" />
                            ))}
                            {/* Chart Lines */}
                            <polyline points={line1Points} fill="none" stroke="#ef4444" strokeWidth="2" />
                            <polyline points={line2Points} fill="none" stroke="#9ca3af" strokeWidth="2" strokeDasharray="4" />
                             {/* Highlighted area */}
                            <rect x="150" y="0" width="60" height="100" fill="rgba(239, 68, 68, 0.05)"></rect>
                        </svg>
                        <div className="flex justify-between text-xs text-gray-500 mt-2 px-2">
                           {chartMonths.map((month, index) => (
                               <span key={month} className={`flex-1 text-center ${index >= 5 && index <= 7 ? 'font-bold text-red-500' : ''}`}>{month}</span>
                           ))}
                        </div>
                    </div>
                    <div className="mt-6 text-center text-gray-600">
                        <p>В <span className="text-red-500 font-bold">6 раз</span> вырастает выручка в пиковые месяцы</p>
                    </div>
                </div>
            </div>
        </Section>

        {/* Benefits Section */}
        <Section>
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Что получишь с франшизой <span className="text-red-500">ХотТур</span></h2>
            </div>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {billboardBenefits.slice(0, 2).map((benefit, index) => (
                    <div key={index} className="p-6 bg-gray-100 rounded-lg">
                        <div className="flex justify-between items-center">
                            <h4 className="font-bold text-gray-800">{benefit.title}</h4>
                            <ArrowRightCircleIcon className="w-6 h-6 text-gray-400" />
                        </div>
                        <p className="mt-2 text-sm text-gray-600 whitespace-pre-line">{benefit.description}</p>
                    </div>
                ))}
                <div className="rounded-lg overflow-hidden shadow-md"><img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200&auto=format&fit=crop" alt="Benefit 1" className="w-full h-full object-cover" /></div>
                
                <div className="rounded-lg overflow-hidden shadow-md"><img src="https://images.unsplash.com/photo-1533104816931-20fa691d6ef7?q=80&w=800&auto=format&fit=crop" alt="Benefit 2" className="w-full h-full object-cover" /></div>
                {billboardBenefits.slice(2, 4).map((benefit, index) => (
                     <div key={index} className="p-6 bg-gray-100 rounded-lg">
                        <div className="flex justify-between items-center">
                            <h4 className="font-bold text-gray-800">{benefit.title}</h4>
                            <ArrowRightCircleIcon className="w-6 h-6 text-gray-400" />
                        </div>
                        <p className="mt-2 text-sm text-gray-600 whitespace-pre-line">{benefit.description}</p>
                    </div>
                ))}

                {billboardBenefits.slice(4, 6).map((benefit, index) => (
                     <div key={index} className="p-6 bg-gray-100 rounded-lg">
                        <div className="flex justify-between items-center">
                            <h4 className="font-bold text-gray-800">{benefit.title}</h4>
                            <ArrowRightCircleIcon className="w-6 h-6 text-gray-400" />
                        </div>
                        <p className="mt-2 text-sm text-gray-600 whitespace-pre-line">{benefit.description}</p>
                    </div>
                ))}
                <div className="rounded-lg overflow-hidden shadow-md"><img src="https://images.unsplash.com/photo-1634733591032-15ac63795551?q=80&w=1200&auto=format&fit=crop" alt="Benefit 3" className="w-full h-full object-cover" /></div>
            </div>
        </Section>
    </div>
  );
};

export default DigitalBillBoardPage;