import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMetrics, setActiveMetrics] = useState({
    bots: 1247,
    tasks: 8934,
    views: 234567
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetrics(prev => ({
        bots: prev.bots + Math.floor(Math.random() * 5),
        tasks: prev.tasks + Math.floor(Math.random() * 20),
        views: prev.views + Math.floor(Math.random() * 100)
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: 'Zap',
      title: 'Автоматизация действий',
      description: 'Лайки, подписки, комментарии и репосты выполняются автоматически по вашему расписанию'
    },
    {
      icon: 'Users',
      title: 'Массовое управление',
      description: 'Управляйте сотнями аккаунтов одновременно из единого интерфейса'
    },
    {
      icon: 'BarChart3',
      title: 'Аналитика роста',
      description: 'Детальная статистика по каждому аккаунту и задаче в режиме реального времени'
    },
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: 'Защита от блокировок через имитацию человеческого поведения и прокси'
    },
    {
      icon: 'Clock',
      title: 'Гибкое планирование',
      description: 'Настройка расписания работы ботов с учетом часовых поясов и активности'
    },
    {
      icon: 'Target',
      title: 'Таргетинг аудитории',
      description: 'Умный подбор целевой аудитории по интересам, геолокации и активности'
    }
  ];

  const plans = [
    {
      name: 'Старт',
      price: '1 990',
      period: 'месяц',
      description: 'Для начинающих',
      features: [
        'До 10 аккаунтов',
        '1000 действий в день',
        'Базовая аналитика',
        'Email поддержка'
      ],
      popular: false
    },
    {
      name: 'Про',
      price: '4 990',
      period: 'месяц',
      description: 'Для профессионалов',
      features: [
        'До 50 аккаунтов',
        '10 000 действий в день',
        'Расширенная аналитика',
        'Приоритетная поддержка',
        'API доступ',
        'Прокси включены'
      ],
      popular: true
    },
    {
      name: 'Бизнес',
      price: '14 990',
      period: 'месяц',
      description: 'Для агентств',
      features: [
        'Безлимит аккаунтов',
        'Безлимит действий',
        'Полная аналитика',
        'Персональный менеджер',
        'API доступ',
        'Прокси включены',
        'White-label решение'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                <Icon name="Bot" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">BotFarm</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Возможности</a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Тарифы</a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">О нас</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
            </div>
            <div className="flex items-center gap-4">
              <Button className="bg-primary hover:bg-primary/90 hidden md:flex">
                <Icon name="LogIn" size={18} className="mr-2" />
                Войти
              </Button>
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon">
                    <Icon name="Menu" size={24} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] bg-card">
                  <nav className="flex flex-col gap-6 mt-8">
                    <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-foreground hover:text-primary transition-colors">Возможности</a>
                    <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-foreground hover:text-primary transition-colors">Тарифы</a>
                    <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-foreground hover:text-primary transition-colors">О нас</a>
                    <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-foreground hover:text-primary transition-colors">Контакты</a>
                    <Button className="bg-primary hover:bg-primary/90 w-full mt-4">
                      <Icon name="LogIn" size={18} className="mr-2" />
                      Войти
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/2cb4fece-6d2a-4e26-a186-913fb3174614/files/023a679d-3da3-445f-a3d1-21751390fdca.jpg')] bg-cover bg-center opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 text-base px-4 py-2 bg-primary/20 text-primary border-primary/50">
              🚀 Автоматизация SMM
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Управляйте армией <br />
              <span className="gradient-text">ботов для соцсетей</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
              Автоматизируйте продвижение в Instagram, VK, TikTok и других платформах. 
              Растите охваты и вовлеченность в 10 раз быстрее.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 animate-pulse-glow">
                <Icon name="Rocket" size={20} className="mr-2" />
                Начать бесплатно
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть демо
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <Card className="bg-card/50 backdrop-blur border-primary/30 hover-scale">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-black gradient-text mb-2">{activeMetrics.bots.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Активных ботов</div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur border-secondary/30 hover-scale">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-black gradient-text mb-2">{activeMetrics.tasks.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Задач в день</div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur border-accent/30 hover-scale">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-black gradient-text mb-2">{(activeMetrics.views / 1000).toFixed(0)}K</div>
                  <div className="text-sm text-muted-foreground">Охват/день</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/50">Возможности</Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Всё для эффективного продвижения
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мощные инструменты для автоматизации SMM-задач любой сложности
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover-scale animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={feature.icon as any} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-primary/30 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-4">Работает с популярными платформами</h3>
                  <p className="text-muted-foreground mb-6">
                    Наши боты поддерживают все основные социальные сети и мессенджеры
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {['Instagram', 'VK', 'TikTok', 'Telegram', 'YouTube', 'Facebook'].map(platform => (
                      <Badge key={platform} variant="secondary" className="text-base px-4 py-2">
                        {platform}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="h-full min-h-[300px] bg-cover bg-center" style={{ backgroundImage: `url('https://cdn.poehali.dev/projects/2cb4fece-6d2a-4e26-a186-913fb3174614/files/a49297cc-48e0-4993-a49d-9683ec891875.jpg')` }}></div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">Тарифы</Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Выберите свой план
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Гибкие тарифы для любых задач — от первых шагов до масштабного продвижения
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative bg-card border-border transition-all duration-300 hover-scale ${
                  plan.popular ? 'border-primary/50 shadow-2xl shadow-primary/20 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 text-sm">
                      ⭐ Популярный
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardDescription className="text-base mb-2">{plan.description}</CardDescription>
                  <CardTitle className="text-3xl mb-4">{plan.name}</CardTitle>
                  <div className="flex items-end justify-center gap-2">
                    <span className="text-5xl font-black gradient-text">{plan.price}</span>
                    <span className="text-muted-foreground mb-2">₽/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90' 
                        : 'bg-primary hover:bg-primary/90'
                    }`}
                    size="lg"
                  >
                    Выбрать план
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <Badge className="mb-4 bg-primary/20 text-primary border-primary/50">О проекте</Badge>
                <h2 className="text-4xl md:text-5xl font-black mb-6">
                  Технологии будущего <span className="gradient-text">уже сегодня</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  BotFarm — это результат 5 лет разработки и тестирования систем автоматизации для социальных сетей. 
                  Мы помогли тысячам бизнесов увеличить охваты и вовлеченность.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Icon name="Award" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-bold">5+ лет на рынке</div>
                      <div className="text-sm text-muted-foreground">Проверено временем</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                      <Icon name="Users" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <div className="font-bold">10 000+ клиентов</div>
                      <div className="text-sm text-muted-foreground">Доверяют нам</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                      <Icon name="TrendingUp" size={24} className="text-accent" />
                    </div>
                    <div>
                      <div className="font-bold">98% успешных кампаний</div>
                      <div className="text-sm text-muted-foreground">Результат гарантирован</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 rounded-3xl blur-3xl"></div>
                <img 
                  src="https://cdn.poehali.dev/projects/2cb4fece-6d2a-4e26-a186-913fb3174614/files/857c7023-3959-4790-ad27-c99e3315f568.jpg" 
                  alt="Analytics" 
                  className="relative rounded-3xl shadow-2xl hover-scale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/50">Контакты</Badge>
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                Остались вопросы?
              </h2>
              <p className="text-xl text-muted-foreground">
                Напишите нам — ответим в течение 15 минут
              </p>
            </div>

            <Card className="bg-card border-border">
              <CardContent className="pt-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                      <Input placeholder="Иван Петров" className="bg-background" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input type="email" placeholder="ivan@example.com" className="bg-background" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input type="tel" placeholder="+7 (999) 123-45-67" className="bg-background" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше сообщение</label>
                    <Textarea 
                      placeholder="Расскажите, чем мы можем помочь..."
                      className="bg-background min-h-[150px]"
                    />
                  </div>
                  <Button size="lg" className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="bg-muted/20 border-border text-center hover-scale">
                <CardContent className="pt-6">
                  <Icon name="Mail" size={32} className="text-primary mx-auto mb-3" />
                  <div className="font-semibold mb-1">Email</div>
                  <div className="text-sm text-muted-foreground">hello@botfarm.ru</div>
                </CardContent>
              </Card>
              <Card className="bg-muted/20 border-border text-center hover-scale">
                <CardContent className="pt-6">
                  <Icon name="MessageCircle" size={32} className="text-secondary mx-auto mb-3" />
                  <div className="font-semibold mb-1">Telegram</div>
                  <div className="text-sm text-muted-foreground">@botfarm_support</div>
                </CardContent>
              </Card>
              <Card className="bg-muted/20 border-border text-center hover-scale">
                <CardContent className="pt-6">
                  <Icon name="Phone" size={32} className="text-accent mx-auto mb-3" />
                  <div className="font-semibold mb-1">Телефон</div>
                  <div className="text-sm text-muted-foreground">+7 (495) 123-45-67</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 py-12 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                  <Icon name="Bot" size={24} className="text-white" />
                </div>
                <span className="text-xl font-bold gradient-text">BotFarm</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Автоматизация SMM для вашего бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground transition-colors">Возможности</a></li>
                <li><a href="#pricing" className="hover:text-foreground transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Документация</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-foreground transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Вакансии</a></li>
                <li><a href="#contact" className="hover:text-foreground transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Статус</a></li>
                <li><a href="#contact" className="hover:text-foreground transition-colors">Связаться</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 BotFarm. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;