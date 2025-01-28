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
import classes from './HeaderMegaMenu.module.css';
import Link from 'next/link';

export function HeaderMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
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
            : 'var(--mantine-color-dark-10)', // Change background on scroll
          transition: 'background-color 0.3s ease', // Smooth transition
        }}
      >
        <Container size="xl" style={{ marginTop: '15px', marginBottom: '20px', position: 'relative' }}>
          <Group justify="flex-start" h="100%" style={{ gap: '70px' }}>
            {/* Logo */}
            <Image
              alt="logo"
              src="/images/logo.png"
              style={{
                width: 'clamp(60px, 5vw, 70px)', // Responsive scaling
                height: 'auto',
              }}
            />

            {/* Navigation Links */}
            <Group
              h="100%"
              gap="28px"
              visibleFrom="sm"
              style={{
                alignItems: 'center',
              }}
            >
              <Link
                href="/"
                className={classes.link}
                style={{
                  color: '#FFFFFF',
                  fontSize: '16px',
                  fontWeight: '500',
                  fontFamily: 'Manrope',
                  position: 'relative',
                  paddingBottom: '5px',
                }}
              >
                ABOUT ME
                {/* <span
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '50%',
                    top: '100%',
                    transform: 'translateX(-50%)',
                    width: '4px',
                    height: '4px',
                    backgroundColor: 'red',
                    borderRadius: '50%',
                    display: 'block',
                  }}
                ></span> */}
              </Link>
              <Link
                href="/market"
                className={classes.link}
                style={{
                  color: '#FFFFFF',
                  fontSize: '16px',
                  fontWeight: '500',
                  fontFamily: 'Manrope',
                  position: 'relative',
                  paddingBottom: '5px',
                }}
              >
                MARKET
              </Link>
              <Link
                href="/projects"
                className={classes.link}
                style={{
                  color: '#FFFFFF',
                  fontSize: '16px',
                  fontWeight: '500',
                  fontFamily: 'Manrope',
                  position: 'relative',
                  paddingBottom: '5px',
                }}
              >
                PROJECTS
              </Link>
            </Group>

            {/* Action Buttons */}
            <Group visibleFrom="sm" style={{ marginLeft: 'auto', alignItems: 'center' }}>
              <Button
                variant="default"
                onClick={() => {
                  window.open('mailto:faiz199011@gmail.com', '_blank');
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
                SAY “HELLO!”
              </Button>

              <Button
                variant="default"
                onClick={() => {
                  window.open('cv/cv.pdf', '_blank'); // Replace 'cv.pdf' with the actual file name in your public folder
                }}
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

            {/* Mobile Menu */}
            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              hiddenFrom="sm"
              style={{
                marginLeft: 'auto',
              }}
            />
          </Group>
        </Container>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="40%" // Adjust the size
        position="top" // Open from the top
        padding="md"
        title="Faiz Rhm"
        hiddenFrom="sm"
        zIndex={1000000}
        styles={{
          body: {
            backgroundColor: '#171717', // Customize the background color
            transition: 'background-color 0.3s ease', // Smooth transition
          },
          title: {
            color: "#FFFFFF", // Customize the title color
            fontSize: "20px", // Customize the title font size
          },
          header: {
            backgroundColor: '#171717', // Customize the title background color
            paddingTop: "30px", // Optional: Add padding for spacing
          },
        }}
      >
        <ScrollArea h="calc(50vh - 80px)" mx="-md">
          <Divider my="sm" />
          <div
            style={{
              display: "flex", // Use flexbox
              flexDirection: "column", // Arrange items in a column
              justifyContent: "center", // Center items vertically
              alignItems: "flex-start", // Align items to the left
              gap: "16px", // Space between links
              padding: "16px", // Padding around the links
            }}
          >
            <Link
              href="/"
              className={classes.link}
              style={{
                color: "#FFFFFF",
                fontSize: "32px",
                fontWeight: "900",
                fontFamily: "Manrope",
                position: "relative",
                paddingBottom: "5px",
                textDecoration: "none", // Remove underline
              }}
            >
              ABOUT ME
            </Link>
            <Link
              href="/market"
              className={classes.link}
              style={{
                color: "#FFFFFF",
                fontSize: "32px",
                fontWeight: "900",
                fontFamily: "Manrope",
                position: "relative",
                paddingBottom: "5px",
                textDecoration: "none", // Remove underline
              }}
            >
              MARKET
            </Link>
            <Link
              href="/projects"
              className={classes.link}
              style={{
                color: "#FFFFFF",
                fontSize: "32px",
                fontWeight: "900",
                fontFamily: "Manrope",
                position: "relative",
                paddingBottom: "5px",
                textDecoration: "none", // Remove underline
              }}
            >
              PROJECTS
            </Link>
          </div>


          <Divider my="sm" />

          <Space h={10} />

          <Group justify="center" grow pb="xl" px="md">
            <Button
              variant="default"
              onClick={() => {
                window.location.href =
                  "mailto:faiz199011@gmail.com?subject=Hello&body=Hi, I would like to connect with you.";
              }}
              style={{
                background: "#FFFFFF",
                height: "45px",
                borderRadius: "12px",
                color: "#000000",
                fontFamily: "Manrope",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              SAY “HELLO!”
            </Button>

            <Button
              variant="default"
              style={{
                background: "#171717",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                height: "45px",
                borderRadius: "12px",
                color: "#FFFFFF",
                fontFamily: "Manrope",
                fontSize: "16px",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                paddingInline: "70px",
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
