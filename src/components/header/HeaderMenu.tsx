'use client';

import React, { useState, useEffect } from 'react';
import {
  Burger,
  Button,
  Divider,
  Drawer,
  Group,
  ScrollArea,
  Image,
  Container,
  ActionIcon,
  Space,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconDownload } from '@tabler/icons-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { trackScheduleConsultation, trackCTAClick } from '@/lib/analytics';
import classes from './HeaderMegaMenu.module.css';

export function HeaderMenu() {
  const pathname = usePathname();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setIsScrolled(window.scrollY > 0);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <Space h={120}>
      <header
        className={classes.header}
        style={{
          borderBottom: 'none',
          backgroundColor: isScrolled
            ? 'var(--mantine-color-dark-9)'
            : 'var(--mantine-color-dark-10)',
          transition: 'background-color 0.3s ease',
        }}
      >
        <Container size="xl" style={{ marginTop: '15px', marginBottom: '20px' }}>
          <Group justify="flex-start" h="100%" style={{ gap: '70px' }}>
            <Image
              alt="logo"
              src="/images/logo.png"
              style={{ width: 'clamp(60px, 5vw, 70px)', height: 'auto' }}
            />

            {/* Desktop Links */}
            <Group h="100%" gap="28px" visibleFrom="sm">
            {[
            { href: '/', label: 'ABOUT ME' },
            { href: '/services', label: 'SERVICES' },
            { href: '/market', label: 'MARKET' },
            { href: '/projects', label: 'PROJECTS' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={classes.link}
              style={{
                color: '#FFFFFF',
                fontSize: '16px',
                fontWeight: '900',
                fontFamily: 'Manrope',
                position: 'relative',
                paddingBottom: '12px',
                textDecoration: 'none',
              }}
            >
              {label}
              {isActive(href) && (
                <span
                  style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    bottom: '0px',
                    width: '6px',
                    height: '6px',
                    backgroundColor: '#FF4C4C',
                    borderRadius: '50%',
                  }}
                />
              )}
            </Link>
          ))}

            </Group>

            {/* Desktop Buttons */}
            <Group visibleFrom="sm" style={{ marginLeft: 'auto' }}>
              <Button
                variant="default"
                onClick={() => {
                  window?.open(process.env.NEXT_PUBLIC_CAL_URL || 'https://cal.com/faizal-rahman-mohammadi-8hg4s1/30min', '_blank');
                  trackScheduleConsultation('header');
                  trackCTAClick('LET\'s TALK', 'header');
                }}
                style={{
                  background: '#FFFFFF',
                  height: '45px',
                  borderRadius: '12px',
                  color: '#000000',
                  fontFamily: 'Manrope',
                  fontSize: '16px',
                  fontWeight: '600',
                }}
              >
                LET&apos;s TALK
              </Button>

              <Button
                variant="default"
                onClick={() => window?.open('cv/cv.pdf', '_blank')}
                style={{
                  background: '#171717',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  height: '45px',
                  borderRadius: '12px',
                  color: '#FFFFFF',
                  fontFamily: 'Manrope',
                  fontSize: '16px',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                RESUME
                <ActionIcon size="lg" color="gray" variant="subtle">
                  <IconDownload size={18} stroke={1.5} />
                </ActionIcon>
              </Button>
            </Group>

            {/* Mobile Menu Button */}
            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              hiddenFrom="sm"
              style={{ marginLeft: 'auto' }}
            />
          </Group>
        </Container>
      </header>

      {/* Drawer for Mobile */}
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="40%"
        position="top"
        padding="md"
        title="Faiz Rhm"
        hiddenFrom="sm"
        zIndex={1000000}
        styles={{
          body: { backgroundColor: '#171717' },
          title: { color: '#FFFFFF', fontSize: '20px' },
          header: { backgroundColor: '#171717', paddingTop: '30px' },
        }}
      >
        <ScrollArea h="calc(50vh - 80px)" mx="-md">
          <Divider my="sm" />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: '24px',
              padding: '16px',
            }}
          >
            {[
              { href: '/', label: 'ABOUT ME' },
              { href: '/services', label: 'SERVICES' },
              { href: '/market', label: 'MARKET' },
              { href: '/projects', label: 'PROJECTS' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={classes.link}
                style={{
                  color: '#FFFFFF',
                  fontSize: '16px',
                  fontWeight: '900',
                  fontFamily: 'Manrope',
                  position: 'relative',
                  paddingBottom: '18px',
                  textDecoration: 'none',
                }}
              >
                {label}
                {isActive(href) && (
                  <span
                    style={{
                      position: 'absolute',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      bottom: '0px',
                      width: '8px',
                      height: '8px',
                      backgroundColor: '#FF4C4C', // Red dot
                      borderRadius: '50%',
                    }}
                  />
                )}
              </Link>
            ))}
          </div>

          <Divider my="sm" />
          <Space h={10} />

          <Group justify="center" grow pb="xl" px="md">
            <Button
              variant="default"
              onClick={() => {
                window?.open(process.env.NEXT_PUBLIC_CAL_URL || 'https://cal.com/faizal-rahman-mohammadi-8hg4s1/30min', '_blank');
                closeDrawer();
                trackScheduleConsultation('header_mobile');
                trackCTAClick('LET\'s TALK', 'header_mobile');
              }}
              style={{
                background: '#FFFFFF',
                height: '45px',
                borderRadius: '12px',
                color: '#000000',
                fontFamily: 'Manrope',
                fontSize: '16px',
                fontWeight: '600',
              }}
            >
              LET&apos;s TALK
            </Button>

            <Button
              variant="default"
              onClick={() => window?.open('cv/cv.pdf', '_blank')}
              style={{
                background: '#171717',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                height: '45px',
                borderRadius: '12px',
                color: '#FFFFFF',
                fontFamily: 'Manrope',
                fontSize: '16px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                paddingInline: '70px',
              }}
            >
              RESUME
              <ActionIcon size="lg" color="gray" variant="subtle">
                <IconDownload size={18} stroke={1.5} />
              </ActionIcon>
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>

    </Space>
  );
}
