import {ICalculatorOptionalData, IFlavors} from "@/app/types/calculatorTypes";

export const flavorsGeneral: IFlavors[] = [
    {id: 1, type: 'main', isChoose: false, name: 'STD.1.1-20', cpu: 1, memory: 1024, ssd: 20, count: 0, price: 0},
    {id: 2, type: 'main', isChoose: false, name: 'STD.1.2-30', cpu: 1, memory: 2048, ssd: 30, count: 0, price: 0},
    {id: 3, type: 'main', isChoose: false, name: 'STD.2.2-40', cpu: 2, memory: 2048, ssd: 40, count: 0, price: 0},
    {id: 4, type: 'main', isChoose: false, name: 'STD.2.4-80', cpu: 2, memory: 4096, ssd: 80, count: 0, price: 0},
    {id: 5, type: 'main', isChoose: false, name: 'STD.4.8-120', cpu: 4, memory: 8192, ssd: 120, count: 0, price: 0},
];

export const flavorsIntensive: IFlavors[] = [
    {id: 1, type: 'main', isChoose: false, name: 'CPU.2.2-20', cpu: 2, memory: 2048, ssd: 20, count: 0, price: 0},
    {id: 2, type: 'main', isChoose: false, name: 'CPU.4.4-40', cpu: 4, memory: 4096, ssd: 40, count: 0, price: 0},
    {id: 3, type: 'main', isChoose: false, name: 'CPU.8.8-80', cpu: 8, memory: 8192, ssd: 80, count: 0, price: 0},
    {id: 4, type: 'main', isChoose: false, name: 'CPU.12.12-100', cpu: 12, memory: 12288, ssd: 100, count: 0, price: 0},
    {id: 5, type: 'main', isChoose: false, name: 'CPU.16.16-120', cpu: 16, memory: 16384, ssd: 120, count: 0, price: 0},
];

export const flavorsLarge: IFlavors[] = [
    {id: 1, type: 'main', isChoose: false, name: 'SSD.2.4-120', cpu: 2, memory: 4096, ssd: 120, count: 0, price: 0},
    {id: 2, type: 'main', isChoose: false, name: 'SSD.4.8-150', cpu: 4, memory: 8192, ssd: 150, count: 0, price: 0},
    {id: 3, type: 'main', isChoose: false, name: 'SSD.6.12-180', cpu: 6, memory: 12288, ssd: 180, count: 0, price: 0},
    {id: 4, type: 'main', isChoose: false, name: 'SSD.8.16-240', cpu: 8, memory: 16384, ssd: 240, count: 0, price: 0},
    {id: 5, type: 'main', isChoose: false, name: 'SSD.8.16-300', cpu: 8, memory: 16384, ssd: 300, count: 0, price: 0},
];

export const calculatorOptional: ICalculatorOptionalData[] = [
    {id: 1, title: 'IPv4-адрес (плавающий) ', subtitle: 'Плавающий IP-адрес - это публичный IP-адрес, который выделяется клиенту и сохраняется за клиентом до его освобождения и может быть назначен виртуальному серверу или использоваться для перенаправления портов на несколько виртуальных серверов (DNAT).', type: 'optionalIp4P', isChoose: false, count: 0, price: 0},
    {id: 2, title: 'IPv4-адрес (фиксированный) ', subtitle: 'Фиксированный IP-адрес - это публичный либо приватный IP-адрес, назначаемый виртуальному серверу или виртуальному маршрутизатору по DHCP либо статически.', type: 'optionalIp4F', isChoose: false, count: 0, price: 0},
    {id: 3, title: 'IPv6-адрес', subtitle: '', type: 'optionalIp4', isChoose: false, count: 0, price: 0},
    {id: 4, title: 'Виртуальный маршрутизатор', subtitle: 'Программно-определяемый маршрутизатор для обеспечения доступа виртуальной сети проекта в сеть Интернет. Публичный IP-адрес маршрутизатора отдельно не тарифицируется)', type: 'router', isChoose: false, count: 0, price: 0},
]

export const calculatorBackup: ICalculatorOptionalData[] = [
    {id: 1, title: 'Дисковое пространство для хранения образов', subtitle: 'Снапшот - образ виртуальной машины, создаваемый на базе запущенного виртуального сервера, из которого может быть создан клон виртуального сервера или восстановлены данные исходного за 1 MiB.', type: 'backup', isChoose: false, count: 0, price: 0},
    {id: 2, title: 'Администрирование под запрос', subtitle: 'Сопровождение серверов, сетей, баз данных, приложений, ОС и др. Аудит, диагностика и настройка по вашему запросу.', type: 'static', isChoose: false, count: 0, price: 'Цена по запросу'}
]
