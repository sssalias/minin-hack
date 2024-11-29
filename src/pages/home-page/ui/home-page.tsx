import { Divider } from '@nextui-org/react'
import { MainLayout } from 'src/layouts'
import { Container } from 'src/shared/ui'
import { NewsOfferSlider } from 'src/widgets/news-slider'

const HomePage: React.FC = () => {
    return (
        <MainLayout>
            <div className='mt-[-100px] flex flex-col gap-[100px]'>
                {/* Offer here */}
                <section>
                    <NewsOfferSlider/>
                </section>
                {/* Main info here */}
                <section>
                    <Container>
                        <div className='flex flex-col items-center justify-between gap-6'>
                            <h2 className='text-3xl font-semibold'>Кто мы?</h2>
                            <span className='text-xl w-1/2 text-center'><strong>“MininCode”</strong> — ресурс для школьников и студентов, которые хотят заниматься IT в Нижегородской области. 
                            </span>
                            <Divider className='mt-[100px]'/>
                        </div>
                    </Container>
                </section>
                {/* Main info here */}
                <section className='mb-[100px]'>
                    <Container>
                        <div className='flex flex-col items-center justify-between gap-6'>
                            <h2 className='text-3xl font-semibold'>Наша цель</h2>
                            <span className='text-xl w-1/2 text-center'>
                            Объединить образование и IT, помогая обучающимся найти образовательные возможности, мероприятия, общаться с единомышленниками, а также предоставляя возможность образовательным организациям представлять свои программы и события.

                            </span>
                            {/* <Divider className='mt-[100px]'/> */}
                        </div>
                    </Container>
                </section>
            </div>
        </MainLayout>
    )
}
export default HomePage