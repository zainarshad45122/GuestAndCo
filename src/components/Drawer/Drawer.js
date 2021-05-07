import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PostAddIcon from '@material-ui/icons/PostAdd';
import SaveIcon from '@material-ui/icons/Save';
import SettingsIcon from '@material-ui/icons/Settings';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import drawerStyle from '../../assets/jss/views/drawerStyle';


const useStyles = drawerStyle;

export default function MiniDrawer() {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	
	const handleDrawerClose = () => {
		setOpen(false);
	};

	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const menuId = 'primary-search-account-menu';
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
		</Menu>
	);

	const mobileMenuId = 'primary-search-account-menu-mobile';
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<IconButton aria-label="show 4 new mails" color="inherit">
					<SearchIcon />
				</IconButton>
				<p>Search</p>
			</MenuItem>
			<MenuItem>
				<IconButton aria-label="show 11 new notifications" color="inherit">
					<Badge badgeContent={11} color="secondary">
						<NotificationsIcon />
					</Badge>
				</IconButton>
				<p>Notifications</p>
			</MenuItem>

			<MenuItem onClick={handleProfileMenuOpen}>
				<Typography
					color="secondary"
					style={{ borderRadius: '50%', padding: '8px', backgroundColor: '#FF0169',color:'#fff' }}
				>
					AC
				</Typography>
				<p>&nbsp; Profile</p>
			</MenuItem>
		</Menu>
	);
	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
				color="primary"
				style={{ maxHeight: '70px' }}
			>
				<Toolbar >
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer">
						<MenuIcon />
					</IconButton>

					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						<Divider orientation="vertical" className={classes.dividerLength} flexItem />
						<IconButton color="inherit" style={{ padding: '20px' }}>
							<SearchIcon />
						</IconButton>
						<Divider orientation="vertical" className={classes.dividerLength} flexItem />
						<IconButton aria-label="show 17 new notifications" color="inherit" style={{ padding: '20px' }}>
							<Badge badgeContent={11} color="secondary">
								<NotificationsIcon />
							</Badge>
						</IconButton>
						<Divider orientation="vertical" className={classes.dividerLength} flexItem />
						<IconButton
							edge="end"
							aria-label="account of current user"
							aria-controls={menuId}
							aria-haspopup="true"
							onClick={handleProfileMenuOpen}
							color="inherit"
							style={{ padding: '10px' }}
						>
							<Typography
								color="secondary"
								style={{ borderRadius: '50%', padding: '8px', backgroundColor: '#FF0169',color:'#fff' }}
							>
								AC
							</Typography>
						</IconButton>
					</div>
					<div className={classes.sectionMobile}>
						<IconButton
							aria-label="show more"
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleMobileMenuOpen}
							color="inherit"
						>
							<MoreIcon />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
			{renderMenu}
			<Drawer
				variant="permanent"
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open,
				})}
				classes={{
					paper: clsx({
						[classes.drawerOpen]: open,
						[classes.drawerClose]: !open,
					}),
				}}
			>
				<div className={classes.toolbar}>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
					</IconButton>
				</div>
				<Divider />

				<Divider />
				<List style={{ marginTop: '200px' }}>
					<ListItem button>
						<ListItemIcon style={{ borderRight: '2px solid #FF0169' }}>
							{' '}
							<HomeIcon color="secondary" />{' '}
						</ListItemIcon>
						<ListItemText />
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<PostAddIcon />
						</ListItemIcon>
						<ListItemText />
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<SaveIcon />
						</ListItemIcon>
						<ListItemText />
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<SettingsIcon />
						</ListItemIcon>
						<ListItemText />
					</ListItem>
				</List>
			</Drawer>
		</div>
	);
}
