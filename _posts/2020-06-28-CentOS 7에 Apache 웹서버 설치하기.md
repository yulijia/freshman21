---
layout: post
title: CentOS 7에 Apache 설치하기
modified: 2020-06-28
author: Yo0oN
categories: Linux
tags: [Linux, CentOS]
comments: true
published : true
---

* Table of Contents
{:toc}

<hr>
## 1. Apache 웹 서버 패키지 설치

설치를 먼저 해주자.
```bash
$ yum install httpd
```

또는

```bash
$ yum -y install httpd
```

-y 옵션은 모든 대답을 yes로 한다는 뜻이다.

![installApache](/images/installApache/installApache01.jpg "Apache 설치중"){: .align-center}

설치가 완료된다면 /etc 에 httpd 디렉터리가 새로 생성된 것을 볼 수 있다.

<br>
<br>
<hr>

## 2. 방화벽 설정하기

Apache는 기본적으로 80번 포트를 사용하고 있다.

해당 내용이 궁금하다면 /etc/httpd/conf/httpd.conf 파일을 확인해보자.

![80port](/images/installApache/installApache02.jpg "포트번호 확인해보기"){: .align-center}

```bash
$ firewall-cmd --permanent --add-service=http
$ firewall-cmd --permanent --add-service=https
$ firewall-cmd --reload
```

방화벽에 등록한 후 재시작시킨다.

<br>
<br>
<hr>

## 3. 실행하기

```bash
systemctl enable httpd
```

위의 명령어는 부팅시 자동으로 아파치 웹 서버를 실행하도록 해준다.

만약 자동실행을 원하지 않는다면 넘어가도 된다.

```bash
systemctl start httpd
```

서비스 실행하기

<br>
<br>

## 4. 확인
<hr>

설치, 실행이 완료되었다면 실제로 접속이 되는 모습을 확인할 수 있다.

![확인](/images/posts/installApache/installApache03.jpg "확인"){: .align-center}

<br>
<br>
<hr>

## 5. 주요 디렉토리..

![구조](/images/posts/installApache/installApache04.png "구조"){: .align-center}

<ul>
  <li>conf : 웹 서버의 주요 설정 파일인 httpd.conf파일과 MIME 형식을 지정하기 위한 magic 파일이 있음</li>
  <li>conf.d : 아파치의 주요 설정을 분리해서 저장하는 곳.
    <ul>
      <li>../conf/httpd.conf 파일의 마지막을 보면 Include Optional conf.d/*.conf 구문이 있다.</li>
      <li>conf.d위치에 httpd.conf 설정 내용을 분리하여 XX.conf로 저장하면 conf/httpd.conf 파일에서 불러와 사용한다.</li>
    </ul>
  </li>
  <li>conf.modules.d : 아파치의 주요 설정 중 필요한 모듈의 위치를 저장하는 곳
    <ul>
      <li>../conf/httpd.conf 파일의 중간에 보면 Include conf.modules.d/*.conf 구문이 있다.</li>
      <li>conf.modules.d의 파일들을 살펴보면 LoadModule 모듈명 경로 형태로 이루어져있다.</li>
      <li>.conf로 모듈의 위치를 적어 둔 파일을 httpd.conf 설정파일에서 사용한다.</li>
    </ul>
  </li>
  <li>logs : 로그파일위치 /var/log/httpd 링크</li>
  <li>modules : 모듈위치 /usr/lib64/httpd/modules 링크
    <ul>
      <li>아파치에 필요한 모듈들이 저장되어있다.</li>
      <li>이곳에서 사용할 모듈들은 conf.modules.d 폴더의 파일에서 정의해둔다.</li>
      <li>실제 위치는 링크되어있는곳을 참조할것.</li>
    </ul>
  </li>
  <li>run : 프로세스의 PID 저장 위치 /run/httpd 링크</li>

